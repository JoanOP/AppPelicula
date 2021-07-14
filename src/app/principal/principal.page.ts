import { BuscarService } from './../servicios/buscar.service';
import { Component, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  infiniteScroll: IonInfiniteScroll;
  constructor(private buscarService: BuscarService,private router:Router) { }

  ArrayBusqueda:any;
 
  ngOnInit() {
  }

  buscar(event:any){
    this.buscarService.getSearch(event.target.value).then(data=>{
      this.ArrayBusqueda=data["results"];
     
    })

  }
 
  data:string="movie";

  loadData(event) {
    setTimeout(() => {
      event.target.complete();

     
      if (this.ArrayBusqueda.length == 1000) {
        event.target.disabled = true;
      }
    }, 1000);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  getID(id){
    
    this.router.navigate(['detalle-movie',id]);
  }

  
  
  
}

