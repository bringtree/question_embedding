import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {HttpModule}     from '@angular/http';

import {AppRoutingModule}   from './app-routing.module';

import {InMemoryWebApiModule}   from 'angular-in-memory-web-api';
import {InMenoryDataService}  from './in-memory-data.service';

import {AppComponent}        from './app.component';
import {DashboardComponent}  from './dashboard.component';
import {HeroesComponent}     from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService}         from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMenoryDataService),
    AppRoutingModule
  ],
  declarations: [AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent],
  providers: [HeroService],
  bootstrap: [AppComponent]
})


export class AppModule {
}
