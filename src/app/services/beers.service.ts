import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BeerDetails, Beer } from '../models/AllModels';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(
    public http:HttpClient
  ) { }

  getBeers() {
    return this.http.get<any[]>('/api/beer-list');
  }

  getBeerDetails(id) {
    return this.http.get<BeerDetails[]>('/api/beer/' + id);
  }

  getBeerTotalLikes(id) {
    return this.http.get('/api/beer/' + id +'/total-likes');
  }

  getTopBeerDrinkers(id) {
    return this.http.get<any[]>(`/api/beer/${id}/top-drinkers`);
  }

  getTopSellingBars(id) {
    return this.http.get<any[]>(`/api/beer/${id}/top-selling-bars`);
  }

  getBeerSalesByDay(id) {
    return this.http.get<any[]>(`/api/beer/${id}/beer-sales`);
  }
  

}
