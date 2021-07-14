import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarteleraService {

  constructor(private http:HttpClient) { }

  url:string="https://api.themoviedb.org/3/";
  
  //Tendencias
  //https://api.themoviedb.org/3/trending/movie/day?api_key=107fbdf301c55c33a5efcb69432c7854

  getTendencias(){
    return new Promise((resolve, reject) => {
      this.http.get(this.url+"trending/movie/day?api_key=107fbdf301c55c33a5efcb69432c7854").subscribe(res=>{
        return resolve(res);
      },error=>{
        return reject(error);
      })
    })
  }

  //Proximamente
  //https://api.themoviedb.org/3/movie/upcoming?api_key=107fbdf301c55c33a5efcb69432c7854&language=es-ES&page=1

  getProximos(){
    return new Promise((resolve, reject) => {
      this.http.get(this.url+"movie/upcoming?api_key=107fbdf301c55c33a5efcb69432c7854&language=en-US&page=2").subscribe(res=>{
        return resolve(res);
      },error=>{
        return reject(error);
      })
    })
  }
  
  
  //Populares
  //https://api.themoviedb.org/3/movie/popular?api_key=107fbdf301c55c33a5efcb69432c7854&language=es-ES

  getPopulares(){
    return new Promise((resolve, reject) => {
      this.http.get(this.url+"movie/popular?api_key=107fbdf301c55c33a5efcb69432c7854&language=es-ES&page=2").subscribe(res=>{
        return resolve(res);
      },error=>{
        return reject(error);
      })
    })
  }

  //Mejores calificadas 
  //https://api.themoviedb.org/3/movie/top_rated?api_key=107fbdf301c55c33a5efcb69432c7854&language=es-ES

  getCalificados(){
    return new Promise((resolve, reject) => {
      this.http.get(this.url+"movie/top_rated?api_key=107fbdf301c55c33a5efcb69432c7854&language=es-ES&page=2").subscribe(res=>{
        return resolve(res);
      },error=>{
        return reject(error);
      })
    })
  }
  

  //Todas las peliculas 
  AllMovies(i:number){
    return new Promise((resolve, reject) => {
      this.http.get(this.url+"movie/upcoming?api_key=107fbdf301c55c33a5efcb69432c7854&language=es-ES&page="+i).subscribe(res=>{
        return resolve(res);
      },error=>{
        return reject(error);
      })
    })
  }
 
}
