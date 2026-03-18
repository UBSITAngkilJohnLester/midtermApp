import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.interface';
import { Router } from '@angular/router';
import { Services } from '../../services/product-services';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  showModal: boolean = false;

  constructor(
    private productService: Services,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  viewProductDetails(p: Product): void {
    this.selectedProduct = p;
    this.showModal = true;
  }
}