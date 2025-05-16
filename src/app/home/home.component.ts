import { HostListener,Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('foodContainer', { static: false }) foodContainer!: ElementRef;
  @ViewChild('groceries', { static: false }) groceries!: ElementRef;
  @ViewChild('dineout', { static: false }) dineout!: ElementRef;
  isScrolled: boolean;



  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollPosition > 1000;
  }


// FoddButtons
scrollLeft2() {
  console.log("I'm left");
    this.foodContainer.nativeElement.scrollBy({ left: -600, behavior: 'smooth' });
  }
scrollRight2() {
  console.log("I'm Right");
    this.foodContainer.nativeElement.scrollBy({ left: 600, behavior: 'smooth' });
  }

  // grocieres button
  scrollLeftGro() {
    console.log("I'm left gro");
      this.groceries.nativeElement.scrollBy({ left: -600, behavior: 'smooth' });
    }
  scrollRightGro() {
    console.log("I'm Right gro");
      this.groceries.nativeElement.scrollBy({ left: 600, behavior: 'smooth' });
    }

    //DineoutButton
  scrollLeftDine() {
    console.log("I'm left dine");
      this.dineout.nativeElement.scrollBy({ left: -600, behavior: 'smooth' });
    }
  scrollRightDine() {
    console.log("I'm Right dine");
      this.dineout.nativeElement.scrollBy({ left: 600, behavior: 'smooth' });
    }

  head_Inside:any=[
    { link:'https://www.swiggy.com/corporate/' , cont:'Swiggy Corporate'},
    { link:'https://partner.swiggy.com/login#/swiggy' , cont:'Partner with us'},
    {  cont:'Get the app'}
  ]

  swiggyService_Box:any=[
    {anchaLink:'https://www.swiggy.com/restaurants', img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png'},
    {anchaLink:'https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1', img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png'},
    {anchaLink:'https://www.swiggy.com/dineout', img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png'},
    {anchaLink:'https://www.swiggy.com/genie', img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png'},
  ]

  foodRowImg:any=[
    
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png',},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/North%20Indian.png'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chinese.png'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Salad.png'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/South%20Indian.png'}, 
  ]
  foodRowImgTwo:any=[
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Khichdi.png'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pasta.png'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Ice%20Cream.png'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chole%20Bhature.png'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shawarma.png'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pure%20Veg.png'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pav%20Bhaji.png'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Idli.png'}, 
  ]
  grocRowImg:any=[
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/22/0a688af1-1bb4-4a55-8128-31fc79cc9ad0_6d0abb9a-daff-4fbe-a1c9-2dddb6ae6717',cont:'Fresh Vegetables'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/22/85df9d8f-175f-4e3a-8945-468bf6317eee_eb9bf247-f2d1-413d-9cf5-48bc870b222f',cont:'Fresh Fruits'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/22/680b6101-ec23-4767-abd6-056eb15df332_ff276774-11a8-44ed-a587-918bda09ef0a',cont:'Dairy, Bread and Eggs'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/2/90d94613-6a3f-4f86-b0ce-bff84443f18e_1934c92e-b882-463d-95f8-8a6b9a2aeb78',cont:'Atta, Rice and Dals'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/22/9fea7d75-af2c-4fca-b2e1-c3e0ef07ad5b_71bcd18a-8c2e-4afd-b879-71dae4eba6b0',cont:'Masalas and Dry Fruits'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/2/bd45b422-04fa-424e-9f4e-fd37a429d8a0_84182402-0431-4922-82ae-90a802f1009b',cont:'Edible Oils and Ghee'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/2/2ead57e4-00b3-4525-91b2-9eb37a4be375_eee95c8a-e736-42ed-ab86-46add6ffe374',cont:'Munchies'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/2/9314636d-dcb2-468b-bdad-9170f4133e14_00e24371-61a6-4ab5-98e9-552bb94d2557',cont:'Sweet Tooth'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/2/8344b7d1-c41a-4225-8b1d-8a2de011780a_0b366fdd-d4ab-467e-9349-c8ec57f65cda',cont:'Cold Drinks and Juices'},
    {img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/NI_CATALOG/IMAGES/CIW/2024/4/2/c1d3779d-9b01-4853-8cad-99185e39c933_a0e15a76-ea59-47e6-a98e-0bb4dfc40600',cont:'Biscuits and Cakes'}, 
  ]
  
  dineOutData:any=[
      {link:'https://www.swiggy.com/restaurants/465344/dineout',img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/9/25/f53347cb-c0ea-4185-ae80-9948c71d1832_DSC033601e147d660f93d4a8d84cfcd98858e33c1.JPG',text:'Sante Spa Cuisine'},    
      {link:'https://www.swiggy.com/restaurants/702700/dineout', img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1665606878/n4cxusq3cgp9tlbj7bm9.jpg',text:'Cream Centre - Vegetarian'},    
      {link:'https://www.swiggy.com/restaurants/702700/dineout', img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1669015655/dbilgttmrejl5vzyhwup.webp',text:'Cafe Delhi heights'},    
      {link:'https://www.swiggy.com/restaurants/702700/dineout', img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1685364575/9a226eda28f0fc3468f455a2dec8d154.jpg',text:'Sante Spa Cuisine'},    
      {link:'https://www.swiggy.com/restaurants/702700/dineout', img:'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/1/15/e26167c1-a479-4658-abe8-082fc61f1db8_Screenshot2025011513405936f4cf3a46a549fe9e6c826f3c6e3257.JPG',text:'True Tramma Trunck'},    
  ]

  citiesDilDara:any=[
    {link:'https://www.swiggy.com/city/bangalore', data:'Order food online in Bangalore'},
    {link:'https://www.swiggy.com/city/gurgaon', data:'Order food online in Gurgaon'},
    {link:'https://www.swiggy.com/city/hyderabad', data:'Order food online in hyderabad'},
    {link:'https://www.swiggy.com/city/delhi', data:'Order food online in Delhi'},
    {link:'https://www.swiggy.com/city/mumbai', data:'Order food online in Mumbai'},
    {link:'https://www.swiggy.com/city/pune', data:'Order food online in Pune'},
    {link:'https://www.swiggy.com/city/kolkata', data:'Order food online in Kolkata'},
    {link:'https://www.swiggy.com/city/chennai', data:'Order food online in Chennai'},
    {link:'https://www.swiggy.com/city/chandigarh', data:'Order food online in Chandigarh'},
    {link:'https://www.swiggy.com/city/ahmedabad', data:'Order food online in Ahmedabad'},
    {link:'https://www.swiggy.com/city/jaipur', data:'Order food online in Jaipur'},
    // {link:'https://www.swiggy.com/city/chennai', data:'Order food online in hyderabad'},
    {link:'https://www.swiggy.com/city/chennai', data:'Show More'},
    
  ]
  citiesDilgro:any=[
    {link:'https://www.swiggy.com/city/bangalore', data:'Order grocery online in Bangalore'},
    {link:'https://www.swiggy.com/city/gurgaon', data:'Order grocery online in Gurgaon'},
    {link:'https://www.swiggy.com/city/hyderabad', data:'Order grocery online in hyderabad'},
    {link:'https://www.swiggy.com/city/delhi', data:'Order grocery online in Delhi'},
    {link:'https://www.swiggy.com/city/mumbai', data:'Order grocery online in Mumbai'},
    {link:'https://www.swiggy.com/city/pune', data:'Order grocery online in Pune'},
    {link:'https://www.swiggy.com/city/kolkata', data:'Order grocery online in Kolkata'},
    {link:'https://www.swiggy.com/city/chennai', data:'Order grocery online in Chennai'},
    {link:'https://www.swiggy.com/city/chandigarh', data:'Order grocery online in Chandigarh'},
    {link:'https://www.swiggy.com/city/ahmedabad', data:'Order grocery online in Ahmedabad'},
    {link:'https://www.swiggy.com/city/jaipur', data:'Order grocery online in Jaipur'},
    // {link:'https://www.swiggy.com/city/chennai', data:'Order food online in hyderabad'},
    {link:'https://www.swiggy.com/city/chennai', data:'Show More'},
    
  ]

  bottomData:any=[

  {  
   
    swiggyImg:[ 
      {img:'https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg', swigyypPara:' © 2025 Swiggy Limited'}
    ],

    company:[  {liData:'Company'} , 
      {liData:'About Us'} , 
      {liData:'Swiggy Corporate'} , 
      {liData:'Careers'} , 
      {liData:'Team'} , 
      {liData:'Swiggy One'} , 
      {liData:'Swiggy Instamart'} , 
      {liData:'Swiggy Dineout'} , 
      {liData:'Swiggy Genie'} , 
      {liData:' Minis'} ],

      contact:[
        {liData:'Contact us'} , 
      {liData:'Help & Support'} , 
      {liData:'Partner with us'} , 
      {liData:'Ride with us'} , 
      ],

      available:[  {liData:'Available in:'} , 
        {liData:'bangalore'} , 
        {liData:'gurgaon'} , 
        {liData:'hyderabad'} , 
        {liData:'delhi'} , 
        {liData:'mumbai'} , 
        {liData:'pune'} , 
         ],
      life:[  {liData:'Life at Swiggy'} , 
        {liData:'Explore with Swiggy'} , 
        {liData:'Swiggy News'} , 
        {liData:'Snackables'} , 
       
         ],


      
  }
]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }



  navigateToBiryani() {
    this.router.navigate(['/biryani']);
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

}
