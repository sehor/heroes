import { Injectable } from '@angular/core';
import {HEROES} from './heroes-mock';
import {Hero} from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

   getHeroes():Hero[]{
      return HEROES;
   }
}
