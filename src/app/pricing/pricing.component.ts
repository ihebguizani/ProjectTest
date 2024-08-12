import { Component } from '@angular/core';

interface Plan {
  name: string;
  projects: number;
  apiAccess: string;
  storage: string;
  reports: string;
  support: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  plans: Plan[] = [
    {
      name: 'Basic Plan',
      projects: 1,
      apiAccess: '100K',
      storage: '100MB',
      reports: 'Weekly',
      support: '24/7',
      monthlyPrice: 9,
      yearlyPrice: 99
    },
    {
      name: 'Premium Plan',
      projects: 5,
      apiAccess: '100K',
      storage: '200MB',
      reports: 'Weekly',
      support: '24/7',
      monthlyPrice: 19,
      yearlyPrice: 199
    },
    {
      name: 'Corporate Plan',
      projects: 20,
      apiAccess: '300K',
      storage: '500MB',
      reports: 'Weekly',
      support: '24/7',
      monthlyPrice: 49,
      yearlyPrice: 499
    }
  ];

  choosePlan(plan: Plan) {
    console.log('Chosen Plan:', plan);
    // Add your logic for handling plan selection
  }

}
