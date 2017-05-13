/**
 * Created by huangpeisong on 2017/5/14.
 */
import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-dashboard',
  template: `
       
 `
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.splice(1, 5));
  }
}
