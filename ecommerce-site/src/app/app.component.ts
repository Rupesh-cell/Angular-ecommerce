import { Component } from '@angular/core';
import { CartService } from './cart.service'; // Use 'CartService' with an uppercase 'C'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-site';

  constructor(private cartService: CartService) {} // Inject the 'CartService'

  openCart() {
    this.cartService.showCart(); // A method in CartService to open the cart modal
  }
}
