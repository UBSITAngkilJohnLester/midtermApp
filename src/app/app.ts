import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navi } from './Components/navi/navi';
import { Products } from './products/products';
import { ProductList } from './products/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navi, Products, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('midtermApp');
}
