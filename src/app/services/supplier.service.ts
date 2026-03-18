import { Injectable } from '@angular/core';
import { Supplier } from '../models/supplier.interface';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {

  private suppliers: Supplier[] = [
    { id: 1, name: 'Wireless Mouse', supplierName: 'Tech Distributors Inc.', contactPerson: 'John Smith', category: 'Electronics', price: 25.99, stock: 50, status: 'In Stock', description: 'A wireless mouse used for gaming' },
    { id: 2, name: 'Resident Evil Requiem PS5', supplierName: 'Global Gaming Supply', contactPerson: 'Maria Santos', category: 'Video Game', price: 69.99, stock: 5, status: 'Low Stock', description: 'A videogame developed by CAPCOM for the PS5' },
    { id: 3, name: 'Air Fryer', supplierName: 'Kitchen Essentials Co.', contactPerson: 'David Lee', category: 'Kitchen', price: 89.00, stock: 12, status: 'In Stock', description: 'a compact, countertop convection appliance designed to simulate deep-frying by circulating hot air around food, achieving a crispy texture using little to no oil'},
    { id: 4, name: 'Gaming Desk', supplierName: 'Office World Supplies', contactPerson: 'Sarah Johnson', category: 'Home Office', price: 34.99, stock: 0, status: 'Out of Stock', description: 'a specialized, durable, and ergonomic workspace designed to support high-performance computer setups, console gaming, and content creation'},
    { id: 5, name: 'Running Shoes', supplierName: 'SportGear Wholesale', contactPerson: 'Mike Torres', category: 'Apparel', price: 120.00, stock: 25, status: 'In Stock', description: 'specialized footwear designed to reduce impact, enhance performance, and prevent injury.'},
    { id: 6, name: 'Playstation 5', supplierName: 'Sony Philippines', contactPerson: 'Kevin Reyes', category: 'Electronics', price: 749.00, stock: 3, status: 'Low Stock', description: 'Sony flagship home console, featuring an ultra-high-speed SSD for near-instant load times, a custom AMD GPU with ray tracing for realistic visuals, and 4K capability'},
    { id: 7, name: 'Twilight', supplierName: 'Bookworm Distributors', contactPerson: 'Anna Cruz', category: 'Book', price: 55.25, stock: 18, status: 'In Stock', description: 'Seventeen-year-old Bella Swan moves to rainy Forks, Washington, and falls for the mysterious Edward Cullen, only to discover he is a 103-year-old vampire'},
    { id: 8, name: 'Gaming Chair', supplierName: 'Furniture Hub', contactPerson: 'Chris Tan', category: 'Furniture', price: 199.99, stock: 0, status: 'Out of Stock', description: 'a specialized, ergonomic seat designed for long-term comfort during extended, sedentary sessions'},
    { id: 9, name: 'Water Bottle', supplierName: 'FitLife Wholesale', contactPerson: 'Lisa Park', category: 'Fitness', price: 12.99, stock: 100, status: 'In Stock', description: 'a portable, reusable or disposable container—typically made of stainless steel, plastic, or glass—designed to store and transport beverages'},
    { id: 10, name: 'Leather Jacket', supplierName: 'Fashion Forward Supply', contactPerson: 'James Rivera', category: 'Clothing', price: 40.00, stock: 8, status: 'In Stock', description: 'a durable, stylish outer garment typically crafted from treated animal hides (cowhide, lambskin) or synthetic materials.' }
];

  getSuppliers(): Supplier[] {
    return this.suppliers;
  }

  getSupplierById(id: number): Supplier | undefined {
    return this.suppliers.find(s => s.id === id);
  }

  updateSupplier(updatedSupplier: Supplier): void {
    const idx = this.suppliers.findIndex(s => s.id === updatedSupplier.id);
    if (idx !== -1) this.suppliers[idx] = { ...updatedSupplier };
  }

}