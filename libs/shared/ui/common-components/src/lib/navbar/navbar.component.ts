import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'bt-libs-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {


  //Receive -> data as @Input 
  //navbar with a predefined route (Home), and the capacity to add more items to the bar (...items on addHome())
  //see apps\finance\expenses-registration\src\app\app.component.html and app.component.ts for an example
 //this is a getter setter way introduced on Angular 16 (transform), see page 74
  @Input({ transform: addHome, required: true }) navbarItems: NavbarItem[] = [];

}

function addHome(items: NavbarItem[]) {
  return [{ label: 'home', route: '/' }, ...items];
}

export interface NavbarItem {
  label: string;
  route: string
}
