// cart.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>([]);
  private isCartVisibleSubject = new BehaviorSubject<boolean>(false);

  constructor() { }

  getCart() {
    return this.cartSubject.asObservable();
  }

  addToCart(item: any) {
    this.cartItems.push(item);
    this.cartSubject.next(this.cartItems);
    console.log('done')
  }

  removeFromCart(item: any) {
    const index = this.cartItems.findIndex((cartItem) => cartItem.id === item.id);

    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.cartSubject.next(this.cartItems);
    }
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
  }

  // New method to show the cart modal
  showCart() {
    this.isCartVisibleSubject.next(true);
  }

  // New method to hide the cart modal
  hideCart() {
    this.isCartVisibleSubject.next(false);
  }

  // Observable to track the cart modal visibility
  isCartVisible$() {
    return this.isCartVisibleSubject.asObservable();
  }
}
