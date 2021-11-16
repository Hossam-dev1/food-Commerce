import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  addedItems:any []= [];
  totalPrice: Subject<number> = new BehaviorSubject<any> (0);
  totalQty: Subject<number> = new BehaviorSubject<any> (0);
  cartQty :Subject<number> = new BehaviorSubject<any> (0);
  
  cartList:any = new BehaviorSubject<any> ([]);
  constructor() 
  {
    if (localStorage.getItem('currentMeals')) 
    { 

      this.saveData()
      
    }
  }

  addToCart(orderdMeal:any)
  {
  
    // let mergedCartItem = Object.assign({}, orderdMeal,{'quantity':1, 'total':orderdMeal.price})
    

    // console.log(mergedCartItem);
    
    let alreadyExistsInCart:boolean = false;
    let existingCartItems = undefined;

    if (this.addedItems.length > 0) {

      existingCartItems = this.addedItems.find(cartItem=> cartItem.id === orderdMeal.id);
      console.log(this.addedItems);
      
      alreadyExistsInCart = (existingCartItems != undefined)
    }
    
    if (alreadyExistsInCart) {
      
      console.log("done");
      existingCartItems.quantity++;
      this.getCartTotals();

    }
    else{
      this.addedItems.push(orderdMeal);
      this.addedItems.forEach((a:any)=>
      {
        Object.assign(a,{quantity:1,total:a.price})
      });
      this.cartList.next(this.addedItems);
      localStorage.setItem('currentMeals',JSON.stringify(this.addedItems))
    }

    // console.log(this.totalPrice);
    // console.log(this.totalQty);

    
    
    
    
  // this.addedItems.push(orderdMeal);
  // localStorage.setItem('currentMeals',JSON.stringify(this.addedItems))

  // this.addedItems.forEach((a:any)=>
  // {
  //   Object.assign(a,{quantity:1,total:a.price})
  // });
  // this.cartList.next(this.addedItems);


  // console.log(this.cartList._value);
  
  // console.log(this.cartList.getValue());
  }
  getCartTotals()
  {
    let TotalPriceValue:any = 0;
    let itemQtyValue:any = 0;
    let cartQtyValue:any = 0;
    

    for(let currentItem of this.addedItems)
    {
      // console.log(currentItem);
      // console.log(currentItem.price);
      TotalPriceValue += currentItem.quantity * currentItem.price;
      itemQtyValue += currentItem.quantity;
    }
    cartQtyValue += this.addedItems.length;
    //
    this.totalPrice.next(TotalPriceValue);
    this.totalQty.next(itemQtyValue);
    this.cartQty.next(cartQtyValue);
    localStorage.setItem('currentMeals',JSON.stringify(this.addedItems))

  }
  saveData()
  {
    let data:any = localStorage.getItem('currentMeals');
    let result = JSON.parse(data);
    this.addedItems = result;
    this.cartQty.next(result.length);
    this.cartList.next(result);
  }

  deleteItem(i:number)
  {
  this.cartList._value.splice(i,1)
  localStorage.setItem('currentMeals',JSON.stringify(this.cartList._value))
  this.cartList.next(this.addedItems) 
  this.getCartTotals()
  // console.log(this.cartList._value.length);
  }

  incrementItem(item:any)
  {
    item.quantity++;
    this.getCartTotals()
    
  }
  decrementItem(item:any)
  {
    item.quantity--;
    if (item.quantity == 0) {
      item.quantity = 1
    }
    else
    {
      this.getCartTotals()
    }
    
  }




}
