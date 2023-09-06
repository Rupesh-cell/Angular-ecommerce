// src/app/api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) { }

  // Fetch a list of all products
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`);
  }

  // Fetch a specific product by its ID
  getProductById(id: string | null): Observable<any> {
    // Check if the 'id' is not null and is a valid number before making the API request
    if (id !== null && !isNaN(+id)) {
      // Use the '+' operator to convert the string to a number
      return this.http.get<any>(`${this.apiUrl}/products/${+id}`);
    } else {
      // Handle the case when 'id' is null or not a valid number
      // You can return an empty observable, throw an error, or handle it as needed
      return new Observable(); // This is just a placeholder; adjust as per your app's logic
    }
  }

  // Add more methods for different API endpoints if needed
}
