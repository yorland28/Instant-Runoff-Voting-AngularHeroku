import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OptionSetingComponent } from './option-seting/option-seting.component';
import { HomeComponent } from './home/home.component';
import { VotingComponent } from './voting/voting.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionSetingComponent,
    HomeComponent,
    VotingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
