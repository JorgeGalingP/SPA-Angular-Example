import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private _heroesService:HeroesService, private router:Router) { }

  ngOnInit() {
  }

  buscarHeroe(termino:string){
      //console.log(this._heroesService.buscarTodosHeroes(termino));
      this.router.navigate(['/search-heroe', termino]);
  }

}
