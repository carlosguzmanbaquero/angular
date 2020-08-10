import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from './../../../core/services/product/products.service';
import { MyValidators } from './../../../utils/validators';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidators.isPriceValidRange]],
      image: ['', []],
      description: ['', [Validators.required]]
    });
  }

  saveProduct(event: Event){
    event.preventDefault();

    if(this.form.valid){
      const product = this.form.value;
      console.log(this.form.value);
      this.productsService.createProduct(product).
      subscribe( value => {
        console.log(value);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  get priceField(){
    return this.form.get('price');
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const name = `images/${file.name}`;
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);

    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          console.log(url);
          this.form.get('image').setValue(url);
        });
      })
    )
    .subscribe();
  }

}
