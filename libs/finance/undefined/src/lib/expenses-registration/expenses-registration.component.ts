import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bt-libs-undefined-expenses-registration',
  imports: [CommonModule],
  templateUrl: './expenses-registration.component.html',
  styleUrl: './expenses-registration.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpensesRegistrationComponent {}
