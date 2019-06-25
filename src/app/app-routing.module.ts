import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BarDetailsComponent } from './components/bar-details/bar-details.component';
import { BeerDetailsComponent } from './components/beer-details/beer-details.component';
import { BeersComponent } from './components/beers/beers.component';
import { DrinkersComponent } from './components/drinkers/drinkers.component';
import { DrinkerDetailsComponent } from './components/drinker-details/drinker-details.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent },
  {path: 'bar/:id', component: BarDetailsComponent },
  {path: 'beer/:id', component: BeerDetailsComponent },
  {path: 'beers', component: BeersComponent },
  {path: 'drinkers', component:DrinkersComponent },
  {path: 'drinker/:id', component: DrinkerDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
