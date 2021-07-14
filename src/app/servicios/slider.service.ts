import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private http: HttpClient) { }

  url:string="https://api.themoviedb.org/3/movie/";

  

  getEstrenos(){
   
   return new Promise((resolve, reject) => {
     this.http.get(this.url+"now_playing?api_key=107fbdf301c55c33a5efcb69432c7854&language=es-ES&page=1").subscribe(data => {
       return resolve(data);
     }, error => {
       return reject(error);
     })
   })

 }


 getTrailer(id:number){
   
   return new Promise((resolve, reject) => {
     this.http.get("https://api.themoviedb.org/3/movie/"+id+"/videos?api_key=107fbdf301c55c33a5efcb69432c7854&language=es-ES").subscribe(data => {
       return resolve(data);
     }, error => {
       return reject(error);
     })
   })

 }


}
