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
      name: 'Design 1',
      price: 20,
      description: 'This is a product description',
      image: 'Design1.jpeg'
    },
    {
      id: 2,
      name: 'Design 2',
      price: 10,
      description: 'This is a product description',
      image: 'Design2.png'
    },
    {
      id: 3,
      name: 'Design 3',
      price: 10,
      description: 'This is a product description',
      image: 'Design3.png'
    }

  ]);

}
