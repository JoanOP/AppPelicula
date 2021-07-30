import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UsuarioService } from './../servicios/usuario.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private usuarioService: UsuarioService,private toast: ToastController, private router:Router) {}

  loguearse(email: any, password: any) {

  this.usuarioService.loguear(email.value, password.value).then(data => {

    if(data[0]==200){
    
      this.confirmar(data['Mensaje']);
      this.router.navigate(['cartelera']);
      localStorage.setItem('idusuario',data["Usuario"].id);
      localStorage.setItem('usuario',data["Usuario"].user);
      
      email.value="";
      password.value="";
    }else{
      this.confirmar("Datos incorrectas")
    }

  })


}



 async confirmar(msj: string) {
   const toast = await this.toast.create({
     message: msj,
     duration: 3000
   });
   toast.present();
 }


}
