import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-expenses-approval-page',
  imports: [CommonModule],
  templateUrl: './expenses-approval-page.component.html',
  styleUrl: './expenses-approval-page.component.scss',
})



export class ExpensesApprovalPageComponent {

  pageTitle: string = 'Expenses Approval';

  constructor(
    private router: Router,
    private route: ActivatedRoute) {}

  //Navigation test
  // Method that will be called when a button is clicked
  navigateToDetails() {
    this.router.navigate(['/expenses-overview']); // Navigate to expenses-overview route
  }

  ngOnInit(){


    this.pageTitle = this.route.snapshot.data['title'] ; // Set the document title
  }

  
}
