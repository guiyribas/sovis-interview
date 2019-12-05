import { ProductsService } from './../../core/services/products.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
  preserveWhitespaces: true
})
export class ProductFormComponent {

  productForm: FormGroup;
  submitted = false;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {

    const product = this.route.snapshot.data.product;

    this.productForm = this.fb.group({
      id: [product.id, Validators.required],
      name: [product.name, Validators.required],
      price: [product.price, Validators.required]
    });

    console.log(this.productForm);
  }

  ngOnSubmit() {
    this.submitted = true;
    console.log('form', this.productForm.value);
    this.productsService.save(this.productForm.value).subscribe(
      sucess => {
        this.router.navigate(['/dashboard/produtos']);
      },
      error => {
        console.log('error', error);
      }
    );
  }

  ngOnCancel() {
    this.submitted = false;
    this.router.navigate(['/dashboard/produtos']);
  }

}

