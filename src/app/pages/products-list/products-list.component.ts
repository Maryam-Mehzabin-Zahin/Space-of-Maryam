import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'This is a product description',
      image: 'https://picsum.photos/200/300'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      description: 'This is a product description',
      image: 'https://picsum.photos/200/300'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      description: 'This is a product description',
      image: 'https://picsum.photos/200/300'
    }

  ]);

}
