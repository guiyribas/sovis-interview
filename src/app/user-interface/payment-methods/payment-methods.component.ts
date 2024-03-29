import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss']
})
export class PaymentMethodsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  completeOrder() {
    localStorage.removeItem('itemsLocalStorageCart');
    this.router.navigate(['/obrigado-pela-preferencia']);
  }

}
