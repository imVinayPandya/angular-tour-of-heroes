/**
 * Created by vinay on 9/26/2016.
 */

import {Component, OnInit} from '@angular/core';
import {HeroService} from "./hero.service";
import {Hero} from "./hero";
import {Router} from '@angular/router';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: [ 'app/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(private heroService: HeroService, private router: Router) {
    }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }

}
