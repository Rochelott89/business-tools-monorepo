import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpensesRegistrationComponent } from './expenses-registration.component';

describe('ExpensesRegistrationComponent', () => {
  let component: ExpensesRegistrationComponent;
  let fixture: ComponentFixture<ExpensesRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpensesRegistrationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpensesRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
