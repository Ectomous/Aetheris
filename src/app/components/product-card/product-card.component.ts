import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnInit {
  @Input() product?: Product = {
    id: '0',
    name: 'Default Product',
    price: 0,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image:
      'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg',
    availableInStock: 0,
  };
  truncatedDescription: string = '';

  constructor() {}

  ngOnInit() {
    if (this.product && this.product.description) {
      this.truncatedDescription =
        this.product.description.length > 40
          ? this.product.description.slice(0, 40) + '...'
          : this.product.description;
    }
  }
}
