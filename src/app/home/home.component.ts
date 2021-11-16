import { CartService } from './../services/cart.service';
import { MealsService } from './../services/meals.service';

import * as AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';

// import { OurProductsComponent } from './../our-products/our-products.component';
import { Component, OnInit } from '@angular/core';
declare let $:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sliderMeals:any [] = [];
  constructor(public _MealsService:MealsService , public _CartService:CartService) {

    this._MealsService.getPasta().subscribe( (resp)=>
    { 
      this.sliderMeals = resp;
      console.log();
      
    })
  }

  setItem(item:any)
  {
    this._CartService.addToCart(item)
    
  }
  

  loader()
  {
    $(document).ready( function()
    {
      $('.loader-container').fadeOut(500, function()
      {
        $('body').css("overflow",'auto')
      })
    })
  }



  
  ngOnInit(): void {

    setInterval(this.loader,1500)

  

    AOS.init({
      offset: 220,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });


    //loader\\


  
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    center: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<=', '=>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}

