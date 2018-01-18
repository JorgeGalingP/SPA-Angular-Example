import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {

    heroe:any = {};
    logo:boolean = true;

    constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) {
        // Ir a la ruta de la clase usando el id de la url
        activatedRoute.params.subscribe (params => {
            this.heroe = this._heroesService.getHeroe(params['id']);
        })
    }
}
