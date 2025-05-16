import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   

 cartItem:any[]=[];

 addToCart(product:any){
  console.log(this.cartItem); 
  this.cartItem.push(product);}

  
  getCartItem(){
    return this.cartItem;
  }
 


  constructor() { }
}
