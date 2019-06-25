import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SelectItem } from 'primeng/components/common/selectitem';
import { BeerDetails } from '../../models/AllModels';
import { BeersService } from 'src/app/services/beers.service';


@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {
  beer_id:string;
  beerDetails:BeerDetails[];
  name:string;
  manf:string;
  total_likes:string;

  constructor(
    private beerService: BeersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.beer_id = paramMap.get('id'); //url id

      this.beerService.getBeerDetails(this.beer_id).subscribe(
        data => {
          this.beerDetails = data;
          this.name = data[0].beer_name;
          this.manf = data[0].manf;
        }
      );

      this.beerService.getBeerTotalLikes(this.beer_id).subscribe(
        data => {
          this.total_likes = data['total_likes'];
        }
      );
  });
 }
}
