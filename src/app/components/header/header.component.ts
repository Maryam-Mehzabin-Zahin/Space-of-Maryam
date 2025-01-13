import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
showBtnClicked(): void {
console.log('clicked');
}
  title = signal("Maryam's Creative Space");
}
