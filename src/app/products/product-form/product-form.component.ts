import { AlertModalService } from './../../shared/services/alert-modal.service';
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
    private productsService: ProductsService,
    private modal: AlertModalService
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

    let msgSuccess = 'Produto criado com sucesso';
    let msgError = 'Erro ao criar produto, tente novamente!';
    if (this.productForm.value.id) {
      msgSuccess = 'Produto editado com sucesso';
      msgError = 'Erro ao editar produto, tente novamente!';
    }
    this.productsService.save(this.productForm.value).subscribe(
      sucess => {
        this.modal.showAlertSuccess(msgSuccess);
        this.router.navigate(['/dashboard/produtos']);
      },
      error => {
        this.modal.showAlertDanger(msgError);
        console.log('error', error);
      }
    );

  }

  ngOnCancel() {
    this.submitted = false;
    this.router.navigate(['/dashboard/produtos']);
  }

}

