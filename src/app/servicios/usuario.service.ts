import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {}

  url="https://whispering-taiga-10837.herokuapp.com/api/movies";
 
 registrar(usuario: any, email: any, password: any) {
   let datos = {
     user: usuario,
     email:email,
     password: password,
   }
   return new Promise((resolve, reject) => {
     this.http.post(this.url,datos).subscribe(data => {
       return resolve(data);
     }, error => {
       return reject(error);
     })
   })

 }



 loguear(email: any, password: any) {
   let datos = {
     email:email,
     password: password,
   }
   return new Promise((resolve, reject) => {
     this.http.post(this.url+"/login",datos).subscribe(data => {
       return resolve(data);
     }, error => {
       return reject(error);
     })
   })

 }

 comentar(idpelicula:any,comentario:any,iduser:any){
   let datos={
     idpelicula:idpelicula,
     comentario:comentario,
     iduser:iduser,
   }

   return new Promise((resolve, reject) => {
    this.http.post(this.url+"/comentario",datos).subscribe(data => {
      return resolve(data);
    }, error => {
      return reject(error);
    })
  })

 }


 getComentarios(idpelicula:any){

  return new Promise((resolve, reject) => {
    this.http.get(this.url+"/mostrar/comentario/"+idpelicula).subscribe(data => {
      return resolve(data);
    }, error => {
      return reject(error);
    })
  })


}
}


