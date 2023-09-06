// src/app/cart.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartComponent {
  private cartItems: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>([]);

  constructor() { }

  getCart() {
    return this.cartSubject.asObservable();
  }

  addToCart(item: any) {
    this.cartItems.push(item);
    this.cartSubject.next(this.cartItems);
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
  }
}
