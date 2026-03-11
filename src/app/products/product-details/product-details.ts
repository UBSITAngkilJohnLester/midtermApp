import { Component } from '@angular/core';
import { Product } from '../../models/product.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})

export class ProductDetails {
  selectedProduct: Product | null = null;
  showModal: boolean = false;

  viewProductDetails(p: Product) {
    this.selectedProduct = p;
    this.showModal = true;
  }

}
