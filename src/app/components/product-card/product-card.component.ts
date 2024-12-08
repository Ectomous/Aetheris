import { CartService } from './../../services/cart.service';
import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product?: Product = {
    id: '0',
    name: 'Default Product',
    price: 0,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image:
      'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg',
    availableInStock: 0,
  };

  constructor(private cartService: CartService) {}

  addProductToCart(product: Product) {
    this.cartService.addItemToCart(product);
  }
}
