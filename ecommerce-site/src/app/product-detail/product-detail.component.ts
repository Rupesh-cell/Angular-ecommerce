// src/app/product-detail/product-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service'; // Inject the CartComponent with its current name

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: any; // Define a variable to store the product details

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService, // Inject your API service
    private cartService: CartService // Inject the CartComponent with its current name
  ) {}

  ngOnInit(): void {
    // Get the product ID from the route parameter
    const productId = this.route.snapshot.paramMap.get('id');

    // Fetch the product details using the API service
    this.apiService.getProductById(productId).subscribe((data) => {
      this.product = data;
    });
  }

  // Add the selected product to the cart using methods from CartComponent
  addToCart() {
    this.cartService.addToCart(this.product); // Use CartComponent's methods if they handle cart functionality
  }
}


