import { Component, OnInit } from '@angular/core';
import { DrinkersService } from 'src/app/services/drinkers.service';
import { Drinker } from '../../models/AllModels';

@Component({
  selector: 'app-drinkers',
  templateUrl: './drinkers.component.html',
  styleUrls: ['./drinkers.component.css']
})
export class DrinkersComponent implements OnInit {
  
  drinkers:Drinker[];

  constructor(
    private drinkerService:DrinkersService
  ) { }

  ngOnInit() {

    this.drinkerService.getDrinkers().subscribe(data => {
      this.drinkers = data;
    })


  }

}
