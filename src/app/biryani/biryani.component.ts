import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biryani',
  templateUrl: './biryani.component.html',
  styleUrls: ['./biryani.component.scss']
})
export class BiryaniComponent implements OnInit {


  count:number;

  


  navBiryani:any=[
   { icon:'card_travel' , data:'Swiggy Corporate', route:'copr'},
   { icon:'search' , data:'Sign In' , route:'login'},
   { icon:'open_with' , data:'Help' , route:'help'},
   { icon:'help' , data:'Offers' , route:'offer'},
   { icon:'perm_identity' , data:'Search' , route:'search'},
   { icon:'card_giftcard' , data:'Cart' , route:'cart'},
  ]


 biryaniData:any=[
  {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/FOOD_CATALOG/IMAGES/CMS/2024/9/29/50292730-b59a-4519-8a48-057dc89f93e4_c6b0cf1b-ee74-4376-855b-76531d564602.jpg',dataOne:'Biryani By Kilo',dataTwo:'4.3 70-75 mins',dataThree:'Biryani, Hyderabadi, North Indian, Kebabs, Mughlai, Desserts'}
  ,{img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/7aeb2bbff29d99d6e986240911ce0e71',dataOne:'Biryani By Kilo',dataTwo:'4.3 70-75 mins',dataThree:'Biryani, Hyderabadi, North Indian, Kebabs, Mughlai, Desserts'}
  ,{img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/ihezayqrjjvwfauue8xa',dataOne:'Biryani By Kilo',dataTwo:'4.3 70-75 mins',dataThree:'Biryani, Hyderabadi, North Indian, Kebabs, Mughlai, Desserts'}
  ,{img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/wrohceoglapcgvingtqe',dataOne:'Biryani By Kilo',dataTwo:'4.3 70-75 mins',dataThree:'Biryani, Hyderabadi, North Indian, Kebabs, Mughlai, Desserts'}
  ,{img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/FOOD_CATALOG/IMAGES/CMS/2024/9/29/50292730-b59a-4519-8a48-057dc89f93e4_c6b0cf1b-ee74-4376-855b-76531d564602.jpg',dataOne:'Biryani By Kilo',dataTwo:'4.3 70-75 mins',dataThree:'Biryani, Hyderabadi, North Indian, Kebabs, Mughlai, Desserts'}
  ,{img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/7aeb2bbff29d99d6e986240911ce0e71',dataOne:'Biryani By Kilo',dataTwo:'4.3 70-75 mins',dataThree:'Biryani, Hyderabadi, North Indian, Kebabs, Mughlai, Desserts'}
  ,{img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/ihezayqrjjvwfauue8xa',dataOne:'Biryani By Kilo',dataTwo:'4.3 70-75 mins',dataThree:'Biryani, Hyderabadi, North Indian, Kebabs, Mughlai, Desserts'}
  ,{img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/wrohceoglapcgvingtqe',dataOne:'Biryani By Kilo',dataTwo:'4.3 70-75 mins',dataThree:'Biryani, Hyderabadi, North Indian, Kebabs, Mughlai, Desserts'}
  ,{img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/FOOD_CATALOG/IMAGES/CMS/2024/9/29/50292730-b59a-4519-8a48-057dc89f93e4_c6b0cf1b-ee74-4376-855b-76531d564602.jpg',dataOne:'Biryani By Kilo',dataTwo:'4.3 70-75 mins',dataThree:'Biryani, Hyderabadi, North Indian, Kebabs, Mughlai, Desserts'}
  ,{img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/7aeb2bbff29d99d6e986240911ce0e71',dataOne:'Biryani By Kilo',dataTwo:'4.3 70-75 mins',dataThree:'Biryani, Hyderabadi, North Indian, Kebabs, Mughlai, Desserts'}
  ,{img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/ihezayqrjjvwfauue8xa',dataOne:'Biryani By Kilo',dataTwo:'4.3 70-75 mins',dataThree:'Biryani, Hyderabadi, North Indian, Kebabs, Mughlai, Desserts'}
  ,{img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/wrohceoglapcgvingtqe',dataOne:'Biryani By Kilo',dataTwo:'4.3 70-75 mins',dataThree:'Biryani, Hyderabadi, North Indian, Kebabs, Mughlai, Desserts'}

]

constructor(private cartService: CartService, private router: Router) { }

addToCart(product:any){
  console.log("i'm clicked");
  this.cartService.addToCart(product)
}

navigateToCart(route) {
  this.router.navigate([`/${route}`]);
}






// Nithyanand Family Restaurant 40% OFF UPTO ₹80


 

  ngOnInit(): void {
  }

}
