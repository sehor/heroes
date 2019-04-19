import { Component, OnInit, } from '@angular/core';
import { Hero } from '../hero';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero:Hero;
  
  getHero():void{
    const id=+this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroById(id).subscribe(hero=>{this.hero=hero;console.log(this.hero.name)});
  }

  goBack():void{
    this.location.back();
  }

  constructor(private location:Location,private route:ActivatedRoute,private heroService:HeroService) { }

  ngOnInit() {

    
    this.getHero();

  }

}
