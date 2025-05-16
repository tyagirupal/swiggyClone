import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];

  constructor(private cartService: CartService) {
    console.log(this.cartItems);
    
    this.cartItems = this.cartService.getCartItem();
  }

  ngOnInit(): void {
  }

}
