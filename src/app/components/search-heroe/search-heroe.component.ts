import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html'
})
export class SearchHeroeComponent implements OnInit{
    heroes:Heroe[] = [];
    termino:string;

    constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) {

    }
    ngOnInit(){
        this.activatedRoute.params.subscribe (params => {
            this.heroes = this._heroesService.buscarTodosHeroes(params['termino']);
            this.termino = params['termino'];
            //console.log(params['termino']);
        })
    }

}
