import { Injectable } from '@angular/core';
import {HEROES} from './heroes-mock';
import {Hero} from './hero';
import { MessageService } from './message.service';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService :MessageService) { }


   getHeroes():Observable<Hero[]>{
      this.messageService.addMessage("fetch heroes from:    successfully!")
      return of(HEROES);
   }

   getHeroById(id:number):Observable<Hero>{

      this.messageService.addMessage(`HeroService: fetched hero id=${id}`);
      return of(HEROES.find(hero=>hero.id===id));
   }
}
