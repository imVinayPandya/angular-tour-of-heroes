/**
 * Created by vinay on 9/26/2016.
 */

import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from './hero.service';
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    styleUrls: ['heroes.component.css'],
    templateUrl: 'heroes.component.html',

})
export class HeroesComponent implements OnInit{
    heroes: Hero[];
    selectedHero: Hero;

    ngOnInit(): void {
        this.getHeroes();
    }

    constructor(
        private router: Router,
        private heroService: HeroService) { }

    getHeroes(): void {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}

