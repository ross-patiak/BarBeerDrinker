import { Component, OnInit } from '@angular/core';
import { BeersService } from 'src/app/services/beers.service';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  beers:any[] = [];
  finalList:any[];
  manufacturerOptions: SelectItem[];
  likes:string;

  originalBeersList: any[];

  constructor(
    private beerService: BeersService
    ) {}

  ngOnInit() {
    this.beerService.getBeers().subscribe(
      data => {

        //data is an array


        //PREVIOUS ATTEMPT
        // var x = data.map(item => {
        //   this.beerService.getBeerTotalLikes(item.beer_id).subscribe(likes => {
        //     item.likes = likes['total_likes'];

        //   });
        // });

        // console.log(x);



        //ADDS A NEW VALUE TO ARRAY FROM each OBSERVABLE from getBeers()
        data.forEach(beer => {   //WORKS!!!!!!!!
          // console.log(beer);
          var likes = this.beerService.getBeerTotalLikes(beer.beer_id);  //returns Observable

          likes.subscribe(x => {               //notice: Did not subscribe in getBeerLikes()
            beer.likes = x['total_likes'];    //b/c CANNOT do a BULK subscription, do it one at a time
          });

          this.beers.push(beer);    
        });
        
        this.originalBeersList = this.beers;
        this.finalList = this.beers;    //b/c of async, this.beers wont finish building before displaying

        
        var manfs = data.map(beer => beer.manf).filter(
          (item, index, self) => {
            return self.indexOf(item) === index
          }
        );
        
        this.manufacturerOptions = manfs.map(manf => {
          return {
            label: manf,
            value: manf,
          };
        });

      }
    );//end of getBeers()
    
  } //ngInit end


filterBeers(manufacturer: string) {
    this.finalList = this.originalBeersList;

    console.log(this.originalBeersList);


    if (manufacturer) {
      this.finalList = this.originalBeersList.filter(beer => beer.manf === manufacturer);
    }
  }
}
