import { CartService } from './../../services/cart.service';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private authService: AuthService;
  constructor(private cartService: CartService, private router: Router) {
    this.authService = inject(AuthService);
    this.cartService = inject(CartService);
    this.router = inject(Router);
  }

  toggleCart() {
    this.cartService.toggleCart();
  }

  logout() {
    this.authService.logoutUser();
    this.router.navigate(['login']);
  }

  userIsAutenticated() {
    return this.authService.isAutenticated();
  }
}
