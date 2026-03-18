import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from '../../models/supplier.interface';
import { SupplierService } from '../../services/supplier.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-supplier-details',
  imports: [FormsModule],
  templateUrl: './supplier-details.html',
  styleUrl: './supplier-details.css',
})
export class SupplierDetails implements OnInit {
  supplier: Supplier | undefined;
  supplierId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private supplierService: SupplierService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: { [x: string]: string | number; }) => {
      this.supplierId = +params['id'];
      this.supplier = this.supplierService.getSupplierById(this.supplierId);
    });
  }

  saveChanges(): void {
    if (this.supplier) {
      this.supplierService.updateSupplier(this.supplier);
    }
  }

  goBack(): void {
    this.router.navigate(['/suppliers']);
  }

}