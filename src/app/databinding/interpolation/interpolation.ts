import { Component } from '@angular/core';
import { JsonPipe } from '../../../../node_modules/@angular/common/types/_common_module-chunk';
import { FormsModule } from '../../../../node_modules/@angular/forms/types/forms';

@Component({
  selector: 'app-interpolation',
  imports: [JsonPipe, FormsModule],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css',
})
export class Interpolation {
  title: string = 'Angular Data Bindimg Demo';
  studentName: string = 'John Lester P. Angkil';
  courseCode: string = 'APPDEV1';
  currentYear: number = new Date().getFullYear();
  roles = ['Admin', 'Editor', 'Viewer'];
  text: string = "{{expression}}"
  curly: string = "{{ }}"
  common: string = "{{ userName }}"
  methods: string = "{{ getStatus() }}"
  dotnot: string = "{{ user.name }}"
  dotnot2: string = "{{ user?.profile?.email }}"
  jpipe: string = "{{ user | json }}"
  isActive: boolean = false;
  //object type
  user: User = {
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'IT',
    details: {role: 'Admin'}
  }

  countries = {
  }
}
