import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialMediaDashboardComponent } from './social-media-dashboard.component';

describe('SocialMediaDashboardComponent', () => {
  let component: SocialMediaDashboardComponent;
  let fixture: ComponentFixture<SocialMediaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialMediaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
