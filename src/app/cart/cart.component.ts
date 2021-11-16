import { MealsService } from './../services/meals.service';
import { CartService } from './../services/cart.service';
import { Component, OnInit, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartMeals: any = [];
  totalPrice:any = 0;
  totalQty:any = 0;
  cartQty:any = 0;
  


  constructor(private _CartService: CartService, private _MealsService:MealsService) 
  {
    this.updateCartStatus()
  }

  updateCartStatus()
  {
    this._CartService.totalPrice.subscribe((data)=>
    {
      this.totalPrice = data;
      console.log(data);
      
    });

    this._CartService.totalQty.subscribe((data)=>
    {
      this.totalQty = data;
      console.log(data);
    })
  }

  incrementQty(item:any)
  {
    this._CartService.incrementItem(item);
  }
  decremnetQty(item:any)
  {
    this._CartService.decrementItem(item);

  }
  deleteItem(i:any)
  {
    this._CartService.deleteItem(i)
  }

  ngOnInit(): void 
  {

    this._CartService.cartList.subscribe((resp: any) =>
    {
      this.cartMeals = resp;   
      localStorage.setItem('currentMeals',JSON.stringify(resp))
      this._CartService.getCartTotals()

    })
  
  } 

}
