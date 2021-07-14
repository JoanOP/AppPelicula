import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BuscarService {

  constructor(private http:HttpClient) { }

//API SEARCH POR PELICULA
//https://api.themoviedb.org/3/search/movie?api_key=107fbdf301c55c33a5efcb69432c7854&language=en-US&query=dora&page=1&include_adult=false
//API MULTISEARCH (pelicula,persona,genero).
//https://api.themoviedb.org/3/search/multi?api_key=107fbdf301c55c33a5efcb69432c7854&language=en-US&query=jennifer lopez&page=1&include_adult=false

  getSearch(nombre:string){

    return new Promise((resolve, reject) => {
      this.http.get("https://api.themoviedb.org/3/search/multi?api_key=107fbdf301c55c33a5efcb69432c7854&language=es-ES&query="+nombre+"&page=1&include_adult=false").subscribe(data=>{
        return resolve(data);
      },error=>{
        return reject(error);
      })
    })
  }

  

  //https://api.themoviedb.org/3/movie/520763?api_key=107fbdf301c55c33a5efcb69432c7854&language=en-US

  getDetalle(id:number){
    
    return new Promise((resolve, reject) => {
      this.http.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=107fbdf301c55c33a5efcb69432c7854&language=es-ES").subscribe(data=>{
        return resolve(data);
      },error=>{
        return reject(error);
      })

    })
  }
 
}
