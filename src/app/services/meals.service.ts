import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor(private _HttpClient:HttpClient ) {

    }


    getRecipes(term:string):Observable<any>
    {
      return this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?&q=${term}`)
    }
    
    getPasta():Observable<any>
    {
      return this._HttpClient.get(`https://run.mocky.io/v3/219fc12a-4359-4921-9775-33849c8d9d97`)
    }
}
