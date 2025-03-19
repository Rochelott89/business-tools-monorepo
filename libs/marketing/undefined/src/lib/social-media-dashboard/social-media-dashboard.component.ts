import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bt-libs-undefined-social-media-dashboard',
  imports: [CommonModule],
  templateUrl: './social-media-dashboard.component.html',
  styleUrl: './social-media-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialMediaDashboardComponent {}
