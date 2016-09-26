/**
 * Created by vinay on 9/26/2016.
 */

// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';
import {Hero} from "./hero";

@Component({
    selector: 'my-hero-detail',
    template: `
      <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
        <button (click)="goBack()">Back</button>
      </div>
    `,
    styleUrls: ['hero-detail.component.css']

})
export class HeroDetailComponent implements OnInit{
    hero: Hero;

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }


    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }

}
