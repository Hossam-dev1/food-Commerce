import { CartComponent } from './../cart/cart.component';
import { CartService } from './../services/cart.service';
import { MealsService } from './../services/meals.service';
import * as AOS from 'aos';



import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.scss']
})
export class OurProductsComponent implements OnInit {

  allMeals: any[] = [];
  allPasta: any[] = [];
  mealType: any = "";
  currentMeal:any []=[];


  constructor(private _MealsService: MealsService, private _CartService:CartService,) {


    this._MealsService.getPasta().subscribe((resp)=>
    {
      this.allMeals = resp;
    })

  }


  // getType(term: any) {
  //   this.mealType = term;
  //   // console.log(term);
  //   this._MealsService.getRecipes(term).subscribe((types) => {
  //     this.allMeals = types.recipes
  //     this.allMeals.forEach((a:any)=>
  //     {
  //       Object.assign(a,{quantity:1,price:60,total:60})
  //     })
  //     console.log(this.allMeals);
      
  //   })
  // }

  getPasta(term: string) {
    this._MealsService.getPasta().subscribe((pastaData) => {
      this.allPasta = pastaData

      let result = this.allPasta.filter(word => word.category == `${term}`);
      this.allMeals = result;
      
      console.log(this.allMeals);
      
      
    })
  }


  setInCart(meal:any)
  {
    this._CartService.addToCart(meal); 
  }


  ngOnInit(): void {

          $('.loader-container').fadeOut(1000, function () {
      $('body').css("overflow", 'auto')
    })

    AOS.init({
      offset: 220,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }
  // ngOnInit(): void {
  //   $('.loader-container').fadeOut(1000, function () {
  //     $('body').css("overflow", 'auto')
  //   })

  // }


}
