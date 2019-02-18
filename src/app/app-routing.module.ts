import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OptionSetingComponent} from "./option-seting/option-seting.component";
import {HomeComponent} from "./home/home.component";
import {VotingComponent} from "./voting/voting.component";

const routes: Routes = [
  { path: 'seting', component: OptionSetingComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default URL
  {path: 'voting', component: VotingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
