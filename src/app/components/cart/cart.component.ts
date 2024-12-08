import { CurrencyPipe } from '@angular/common';
import { CartItem } from '../../models/cart-item';
import { CartService } from './../../services/cart.service';
import { Component, OnInit, Renderer2, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  isCartVisible = false;
  totalPrice: Signal<number> = signal(0);
  cartItemsArray: CartItem[] = [];

  constructor(private cartService: CartService, private renderer: Renderer2) {
    this.cartItemsArray = this.cartService.getCartArray();
    this.totalPrice = this.cartService.getTotalPrice;
  }

  ngOnInit() {
    this.cartService.cartVisible$.subscribe((visible) => {
      this.isCartVisible = visible;
    });

    setTimeout(() => {
      const cartElement = document.querySelector('.cart');
      if (cartElement) {
        this.renderer.removeClass(cartElement, 'initial');
      }
    }, 0);
  }

  closeCart() {
    this.cartService.toggleCart();
  }

  addItem(item: CartItem) {
    this.cartService.addItem(item);
  }

  removeItem(item: CartItem) {
    this.cartService.removeItem(item);
  }
}
