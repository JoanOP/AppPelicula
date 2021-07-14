import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.page.html',
  styleUrls: ['./trailer.page.scss'],
})
export class TrailerPage implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id:any;
  
  ngOnInit() {
    this.id=this.route.snapshot.params.id;
    console.log(this.id);
    
  }
  // showTrailer(id:number){

  //   this.sliderService.getTrailer(this.id).then(data=>{
  //     this.numero=data;
  //     // this.keyTrailer=data["results"][0].key;
  //     // console.log('Key',this.keyTrailer);

  //  })
  // }
}
