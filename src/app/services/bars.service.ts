import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bar, Beer, Food, Drink } from '../models/AllModels';


@Injectable({
  providedIn: 'root'
})
export class BarsService {

  constructor(
    public http:HttpClient
  ) { }

  getBarList() {
    return this.http.get<Bar[]>('/api/bar-list');
  }

  getBar(id:string) {
    return this.http.get<Bar>('/api/bar/' + id);
  }

  getBeerMenu(id:string) {
    return this.http.get<Beer[]>('/api/bar/' + id +'/beer-menu')
  }

  getFoodMenu(id:string) {
    return this.http.get<Food[]>('/api/bar/' + id +'/food-menu')
  }

  getDrinksMenu(id:string) {
    return this.http.get<Drink[]>('/api/bar/' + id +'/drinks-menu')
  }
}
