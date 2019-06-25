import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DrinkersService } from 'src/app/services/drinkers.service';
import { Drinker } from '../../models/AllModels';


@Component({
  selector: 'app-drinker-details',
  templateUrl: './drinker-details.component.html',
  styleUrls: ['./drinker-details.component.css']
})
export class DrinkerDetailsComponent implements OnInit {
  drinker_id:string;
  drinker_details:Drinker;
  liked_beers:any[];
  frequents:any[];

  constructor(public drinkerService: DrinkersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.drinker_id = paramMap.get('id');

      this.drinkerService.getDrinker(this.drinker_id).subscribe(data => {
          this.drinker_details = data;
      });


      this.drinkerService.getDrinkerLikes(this.drinker_id).subscribe(data => {
        if(data.length == 0) {
          return;
        } else {
          this.liked_beers = data;
        }
      });

      this.drinkerService.getDrinkerFrequents(this.drinker_id).subscribe(data => {
        if(data.length == 0) {
          return;
        } else {
          this.frequents = data;
        }
      });
      
    });


  }

}
