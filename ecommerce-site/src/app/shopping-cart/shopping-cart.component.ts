// shopping-cart.component.ts

import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cart: any[] = [];
  isCartVisible = false; // Add this property

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCart().subscribe((cart) => {
      this.cart = cart;
      
    });

    // Subscribe to the isCartVisible$ observable
    this.cartService.isCartVisible$().subscribe((isVisible) => {
      this.isCartVisible = isVisible;
      console.log('isCartVisible:', isVisible);
    });
  }

  // Other methods...
}
