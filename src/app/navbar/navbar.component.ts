import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';

declare let $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  itemsNum:any = 0
  constructor(private _CartService:CartService) {

    this._CartService.cartQty.subscribe((resp:any)=>
    {
      this.itemsNum = resp;
      // console.log(resp);
      
    })
   
   
  }

  ngOnInit(): void {

    $('#menu-bar').click(function()
    {
      if( $("#menu").css("left")=="1000px" ) //when sidebar inside
      {
          $("#menu").animate ( {left: "0"} ,100);
          $('#menu-bar').addClass('fas fa-times');
      }
      
      else //when sidebar outside
      {
        $("#menu").animate ( {left: "1000"} ,100);
        $('#menu-bar').removeClass('fas fa-times');
        $('#menu-bar').addClass('fas fa-bars');
      }
    })
  }

}
