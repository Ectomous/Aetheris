import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { CartComponent } from './components/cart/cart.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
