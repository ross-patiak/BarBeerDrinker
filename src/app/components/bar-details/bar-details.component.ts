import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

import { Bar, Beer, Food, Drink } from '../../models/AllModels';
import { BarsService } from 'src/app/services/bars.service';

@Component({
  selector: 'app-bar-details',
  templateUrl: './bar-details.component.html',
  styleUrls: ['./bar-details.component.css']
})
export class BarDetailsComponent implements OnInit {

  bar_id: string;
  bar_details: Bar;
  menu: Beer[];
  food_menu:Food[];
  drinks_menu:Drink[];

  constructor(
    public barService: BarsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      this.bar_id = paramMap.get('id');

      this.barService.getBar(this.bar_id).subscribe(
        data => {
          this.bar_details = data;
        },
        (error: HttpResponse<any>) => {
          if (error.status === 404) {
            alert('Bar not found');
          } else {
            console.error(error.status + ' - ' + error.body);
            alert('An error occurred on the server. Please check the browser console.');
          }
        }
      );

      this.barService.getBeerMenu(this.bar_id).subscribe(
        data => {
          this.menu = data;
        }
      );
      
      this.barService.getFoodMenu(this.bar_id).subscribe(
        data => {
          this.food_menu = data;
        }
      );

      this.barService.getDrinksMenu(this.bar_id).subscribe(
        data => {
          this.drinks_menu = data;
        }
      );
      
    });
}

}
