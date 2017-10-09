import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService,Heroe} from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[]=[];
  termino:string;

  constructor( private activatedRoute:ActivatedRoute,
                private _heroeService:HeroesService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.termino=params['termino'];
      this.heroes=this._heroeService.buscarHeroe(params['termino'])
    })
  }

}
