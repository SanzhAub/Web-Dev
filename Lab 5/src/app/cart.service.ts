import { Product } from './products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }
  
  // removeFromCart(productId: number) {
  //   this.items = this.items.filter(item => item.id !== productId);
  // }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor(
    private http: HttpClient) {

  }
}
