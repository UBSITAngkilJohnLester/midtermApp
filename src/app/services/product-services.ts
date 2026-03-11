import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})

export class Services {

  private products: Product[] = [
    { id: 1, name: 'Wireless Mouse', category: 'Electronics', price: 25.99, stock: 50, status: 'In Stock', description: 'A wireless mouse used for gaming' },
    { id: 2, name: 'Resident Evil Requiem PS5', category: 'Video Game', price: 69.99, stock: 5, status: 'Low Stock', description: 'A videogame developed by CAPCOM for the PS5' },
    { id: 3, name: 'Air Fryer', category: 'Kitchen', price: 89.00, stock: 12, status: 'In Stock', description: 'a compact, countertop convection appliance designed to simulate deep-frying by circulating hot air around food, achieving a crispy texture using little to no oil'},
    { id: 4, name: 'Gaming Desk', category: 'Home Office', price: 34.99, stock: 0, status: 'Out of Stock', description: 'a specialized, durable, and ergonomic workspace designed to support high-performance computer setups, console gaming, and content creation'},
    { id: 5, name: 'Running Shoes', category: 'Apparel', price: 120.00, stock: 25, status: 'In Stock', description: 'specialized footwear designed to reduce impact, enhance performance, and prevent injury.'},
    { id: 6, name: 'Playstation 5', category: 'Electronics', price: 749.00, stock: 3, status: 'Low Stock', description: ' Sony’s flagship home console, featuring an ultra-high-speed SSD for near-instant load times, a custom AMD GPU with ray tracing for realistic visuals, and 4K capability'},
    { id: 7, name: 'Twilight', category: 'Book', price: 55.25, stock: 18, status: 'In Stock', description: 'Seventeen-year-old Bella Swan moves to rainy Forks, Washington, and falls for the mysterious Edward Cullen, only to discover he is a 103-year-old vampire'},
    { id: 8, name: 'Gaming Chair', category: 'Furniture', price: 199.99, stock: 0, status: 'Out of Stock', description: 'a specialized, ergonomic seat designed for long-term comfort during extended, sedentary sessions'},
    { id: 9, name: 'Water Bottle', category: 'Fitness', price: 12.99, stock: 100, status: 'In Stock', description: 'a portable, reusable or disposable container—typically made of stainless steel, plastic, or glass—designed to store and transport beverages'},
    { id: 10, name: 'Leather Jacket', category: 'Clothing', price: 40.00, stock: 8, status: 'In Stock', description: 'a durable, stylish outer garment typically crafted from treated animal hides (cowhide, lambskin) or synthetic materials.' }
  ];

  getProducts(): Product[] {
    return this.products
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(e => e.id === id);
  }

  updateProduct(updated: Product): void{
    const idx = this.products.findIndex(e => e.id == updated.id);
    if (idx !== -1) this.products[idx] = { ...updated};
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('auth_token');
  }

  login(): void {sessionStorage.setItem('auth_token', 'demo-token');}
  logout(): void {sessionStorage.removeItem('auth_token');}

}
