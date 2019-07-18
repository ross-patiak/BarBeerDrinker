import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SelectItem } from 'primeng/components/common/selectitem';
import { BeerDetails } from '../../models/AllModels';
import { BeersService } from 'src/app/services/beers.service';
import { DrinkersService } from 'src/app/services/drinkers.service';

import { SalesGraphComponent } from './sales-graph/sales-graph.component';



@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {
  beer_id:string;
  beerDetails:any[];
  name:string;
  manf:string;
  total_likes:string;
  topDrinkers:any[] = [];

  constructor(
    private beerService: BeersService, private drinkerService:DrinkersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(async (paramMap) => {
      this.beer_id = paramMap.get('id'); //url id

      await this.beerService.getBeerDetails(this.beer_id).subscribe(
        data => {
          this.beerDetails = data;
          this.name = data[0].beer_name;
          this.manf = data[0].manf;

          let arr = [];
          this.beerService.getTopSellingBars(this.beer_id).subscribe(data => {
            arr = data;

            for(let i = 0; i < this.beerDetails.length; i++) {
              for(let j = 0; j < arr.length; j++) {
                if(arr[j].bar_id == this.beerDetails[i].bar_id) {
                  this.beerDetails[i].count = arr[j].count;
                }
              }
            }

          });

          
        }
      );

      this.beerService.getBeerTotalLikes(this.beer_id).subscribe(
        data => {
          this.total_likes = data['total_likes'];
        }
      );

      
      this.beerService.getTopBeerDrinkers(this.beer_id).subscribe(data => {

        data.forEach(item => {
          this.drinkerService.getDrinker(item.cust_id).subscribe(res => {
            this.topDrinkers.push({name: res.drinker_name, count: item.count, cust_id: item.cust_id });
          });
        });
      });

      await this.topDrinkers.sort((a, b) => {
        return a.count - b.count;
      });


  });
}

}

