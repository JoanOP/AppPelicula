import { SliderService } from './../servicios/slider.service';
import { MenuController } from '@ionic/angular';
import { CarteleraService } from './../servicios/cartelera.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.page.html',
  styleUrls: ['./cartelera.page.scss'],
})
export class CarteleraPage implements OnInit {

  constructor(private carteleraService:CarteleraService, private router: Router,private menuController:MenuController, private sliderService: SliderService) { }
  ArrayTendencias:any=[];
  ArrayProximos:any=[];
  ArrayPopulares:any=[];
  ArrayCalificados:any=[];
  ArrayEstrenos:any=[];
  
  ngOnInit() {
    this.mostrarTendencias();
    this.mostrarProximos();
    this.mostrarPopulares();
    this.mostrarCalificados();
    this.mostrarEstrenos();
  }

 

  toogleMenu(){
    this.menuController.toggle();
  }
  option = {
    slidesPerView:3.5,
    loop: true,
    
  }
  options = {
    slidesPerView:1.8,
    centeredSlides: true,
    loop: true,
    autoplay:{delay: 2000,
    },
    // allowTouchMove: false,
    // disableOnInteraction:false,
    // pauseOnMouseEnter:false,
  }

  mostrarEstrenos(){

    this.sliderService.getEstrenos().then(data=>{
      this.ArrayEstrenos=data["results"];

    })
  }
  
  mostrarTendencias(){
    this.carteleraService.getTendencias().then(data=>{
    this.ArrayTendencias=data["results"];
    })
  }

  mostrarProximos(){
    this.carteleraService.getProximos().then(data=>{
      this.ArrayProximos=data["results"];
    })
  }

  mostrarPopulares(){
    this.carteleraService.getPopulares().then(data=>{
    this.ArrayPopulares=data["results"];
  })
  }
  mostrarCalificados(){
    this.carteleraService.getCalificados().then(data=>{
      this.ArrayCalificados=data["results"];
    })
  }


  getID(id){
    this.router.navigate(['detalle-movie',id]);
  }


  
}
