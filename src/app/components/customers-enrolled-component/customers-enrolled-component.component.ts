import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customers-enrolled-component',
  imports: [],
  templateUrl: './customers-enrolled-component.component.html',
  styleUrl: './customers-enrolled-component.component.css'
})
export class CustomersEnrolledComponentComponent implements OnInit {
  bondId: number | undefined;
  enrolledCustomers: any[] = [];  // Replace with actual customer data

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get the bond ID from the route
    this.bondId = +this.route.snapshot.paramMap.get('id')!;
    
    // Fetch the customers based on bondId from an API or service
    this.fetchEnrolledCustomers(this.bondId);
  }

  fetchEnrolledCustomers(bondId: number) {
    // In a real scenario, fetch customer data from an API
    // Here, just using some dummy data
    this.enrolledCustomers = [
      { name: 'John Doe', email: 'john.doe@example.com' },
      { name: 'Jane Smith', email: 'jane.smith@example.com' }
    ];
  }
}
