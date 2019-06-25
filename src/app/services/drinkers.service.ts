import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drinker } from '../models/AllModels';

@Injectable({
  providedIn: 'root'
})
export class DrinkersService {

  constructor(
    public http:HttpClient
  ) { }

  getDrinkers() {
    return this.http.get<Drinker[]>('/api/drinker-list');
  }

  getDrinker(id) {
    return this.http.get<Drinker>('/api/drinker/' + id);
  }

  getDrinkerLikes(id) {
    return this.http.get<any[]>('/api/drinker/' +id + '/likes');
  }

  getDrinkerFrequents(id) {
    return this.http.get<any[]>('/api/drinker/' +id + '/frequents');
  }
}
