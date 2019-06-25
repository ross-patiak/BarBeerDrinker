import { Component, OnInit } from '@angular/core';
import { Bar } from '../../models/AllModels';
import { BarsService } from 'src/app/services/bars.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  bars:Bar[];

  constructor(
    public barsService:BarsService
  ) { }

  ngOnInit() {
    this.getBars();
  }

  getBars() {
    this.barsService.getBarList().subscribe(
      data => {
        this.bars = data;
      }, error => {
        alert('could not retrive bar list')
      });
  }

}
