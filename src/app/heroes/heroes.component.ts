import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero:Hero;
  heroes:Hero[];
  selectedHero:Hero;
  constructor(private heroService:HeroService) { }
  getHeroes():void{
    this.heroes=this.heroService.getHeroes();
  }
  onSelect(hero:Hero):void{
   this.selectedHero=hero;
  }
  ngOnInit() {
    this.getHeroes();
  }

}