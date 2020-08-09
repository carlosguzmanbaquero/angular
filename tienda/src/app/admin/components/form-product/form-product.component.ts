import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from './../../../core/service/product/products.service';
import { MyValidators } from './../../../utils/validators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
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

}
