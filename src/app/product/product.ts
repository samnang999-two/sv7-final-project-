import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  products = [
    {
      id: 1,
      image: './14purple-1024x1024.jpg',
      title: 'IPHONE / New in',
      price: 23.51,
      originalPrice: 1000.59,
      description: 'IPHONE 16 PRO MAX'
    },
    {
      id: 2,
      image: './14purple-1024x1024.jpg',
      title: 'IPHONE / Hot Sale',
      price: 499.99,
      originalPrice: 1099.99,
      description: 'IPHONE 15 PRO'
    },
    {
      id: 3,
      image: './14purple-1024x1024.jpg',
      title: 'IPHONE / Limited',
      price: 599.99,
      originalPrice: 1199.99,
      description: 'IPHONE 14 Pro Max'
    },
    {
      id: 4,
      image: './14purple-1024x1024.jpg',
      title: 'IPHONE / Classic',
      price: 399.99,
      originalPrice: 899.99,
      description: 'IPHONE 13'
    }
  ];


}
