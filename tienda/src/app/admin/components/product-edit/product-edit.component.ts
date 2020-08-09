import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/product/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MyValidators } from 'src/app/utils/validators';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id)
      .subscribe(product => {
        // this.form.patchValue(product);
        this.form.patchValue({
          id: product.id,
          description: product.description,
          price: product.price,
          title: product.title,
          image: product.image
        });
      });
    });
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['', []],
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidators.isPriceValidRange]],
      image: ['', []],
      description: ['', [Validators.required]]
    });
  }

  editProduct(event: Event){
    event.preventDefault();

    if(this.form.valid){
      const product = this.form.value;
      console.log(this.form.value);
      this.productsService.updateProduct(this.id, product).
      subscribe( value => {
        console.log(value);
        this.router.navigate(['./admin/products']);
      });
    }
  }

  get priceField(){
    return this.form.get('price');
  }
}
