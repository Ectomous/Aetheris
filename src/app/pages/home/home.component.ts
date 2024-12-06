import { Component, inject } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { Product } from '../../models/product';
import { HeaderComponent } from '../../shared/header/header.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  productsArray: Product[] = [];

  constructor(private productService: ProductService) {
    this.productService = inject(ProductService);

    this.productService.getAllProducts().subscribe((productsArray: Product[]) => {
      this.productsArray = productsArray;
    })
  }
}
