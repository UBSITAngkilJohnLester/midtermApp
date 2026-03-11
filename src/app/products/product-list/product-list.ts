import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.interface';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { Services } from '../../services/product-services';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterOutlet],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  products: Product[] = [];
  returnUrl: string | null = null;
  selectedId: number| string | null = null;

  constructor(
    private productService: Services,
    private router: Router
  ){}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  getProduct(e:Product):void{
    this.selectedId = e.id;
    this.router.navigate(['/product-list', e.id, 'details']);
  }

}
