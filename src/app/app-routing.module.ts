import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedComponent } from './pages/breed/breed.component';
import { BreedsComponent } from './pages/breeds/breeds.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path : 'home', component : HomeComponent },
  { path : 'breeds', component : BreedsComponent },
  { path : 'breed/:name', component : BreedComponent },
  { path : '**', pathMatch : 'full', redirectTo : 'home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
