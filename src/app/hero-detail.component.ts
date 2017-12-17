import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';

@Component({
    selector: 'hero-detail',
    template: `<div *ngIf = "hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div><label>name: </label>{{hero.name}}</div>
        <input [(ngModel)] = "hero.name" placeholder = "name"/>
        </div> `
    //templateUrl: './hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit{
   @Input() hero: Hero;

   constructor( 
       private heroService: HeroService,
       private route: ActivatedRoute,
       private lication: Location
   ){}
}