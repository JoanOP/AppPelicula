import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { SliderService } from './../servicios/slider.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-estrenos',
  templateUrl: './estrenos.page.html',
  styleUrls: ['./estrenos.page.scss'],
})
export class EstrenosPage implements OnInit {

  ArrayEstrenos:any=[];
  d:any=[];
  constructor(private sliderService: SliderService,private router:Router,private menuController:MenuController) { }

  ngOnInit() {
    this.getSlider();
  }

  toogleMenu(){
    this.menuController.toggle();
  }
slideOpts = {
  loop: true,
    initialSlide:0,
    speed: 400
  };

  
  getSlider(){

    this.sliderService.getEstrenos().then(data=>{
      this.ArrayEstrenos=data["results"];

    })
  }

 showTrailer(id:number){

    this.sliderService.getTrailer(id).then(data=>{
      var keyTrailer=data["results"][0].key;
      document.location.href='https://www.youtube.com/watch?v='+keyTrailer;
    })
  }


  getID(id){
    this.router.navigate(['detalle-movie',id]);
  }

 

}
