import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BeersService } from 'src/app/services/beers.service';


@Component({
  selector: 'sales-graph',
  templateUrl: './sales-graph.component.html',
  styleUrls: ['./sales-graph.component.css']
})
export class SalesGraphComponent implements OnInit {

  salesByDay:any[];
  beer_id:string;
  dataSource: Object;

  constructor(
    private beerService:BeersService, 
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((paramMap) => {
      this.beer_id = paramMap.get('id'); //url id

      this.beerService.getBeerSalesByDay(this.beer_id).subscribe(res => {
        
        this.salesByDay = res;

      let orderedArr = [];

       this.salesByDay.forEach((e, i) => {
          if(i == 0) {
            this.salesByDay.forEach(e => {
              if(e.label == "Monday") orderedArr.push(e);
            });
          } else if(i == 1) {
            this.salesByDay.forEach(e => {
              if(e.label == "Tuesday") orderedArr.push(e);
            });
          } else if(i == 2) {
            this.salesByDay.forEach(e => {
              if(e.label == "Wednesday") orderedArr.push(e);
            });
          } else if(i == 3) {
            this.salesByDay.forEach(e => {
              if(e.label == "Thursday") orderedArr.push(e);
            });
          } else if(i == 4) {
            this.salesByDay.forEach(e => {
              if(e.label == "Friday") orderedArr.push(e);
            });
          } else if(i == 5) {
            this.salesByDay.forEach(e => {
              if(e.label == "Saturday") orderedArr.push(e);
            });
          } else if(i == 6) {
            this.salesByDay.forEach(e => {
              if(e.label == "Sunday") orderedArr.push(e);
            });
          }
          
        });

        this.dataSource = {
          chart: {
            caption: "Total Sales Numbers By Day",
            subCaption: "Across All Bars",
            xAxisName: "Day",
            yAxisName: "Sales",
            theme: "fusion"
          }, data: orderedArr }

    });

  });

  }

}
