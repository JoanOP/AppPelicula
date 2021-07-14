import { CarteleraService } from './../servicios/cartelera.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

  constructor(private carteleraService:CarteleraService, private router: Router) { }

  ArrayAllMovies:any=[];
  i:number=1;
  total_paginas:number;
  ArrayPrueba:any=[];

  ngOnInit() {

    this.mostrarAllMovies();
  }

  //OBTENER  TODAS LAS PELICULAS DE TODAS LA PAGINAS
  
  mostrarAllMovies(){
      
    this.carteleraService.AllMovies(this.i).then(data=>{
    this.ArrayAllMovies=data;
    this.ArrayPrueba.push(this.ArrayAllMovies);
    this.total_paginas=this.ArrayAllMovies.total_pages;
    this.i++; 
    for (let index = 1; index < this.total_paginas; index++) {
      
      if(this.i<=this.total_paginas){
        
        this.mostrarAllMovies();
        
      }
      break;
    }      
  })

  }


  getID(id){
    this.router.navigate(['detalle-movie',id]);
  }

}
