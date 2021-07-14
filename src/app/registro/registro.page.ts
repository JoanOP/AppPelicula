import { UsuarioService } from './../servicios/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private UsuarioService: UsuarioService, public toastController: ToastController,private router:Router,private  formBuilder:FormBuilder) {}

  ngOnInit() {

  }

    frmRegistro=this.formBuilder.group({
      usuario: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]],
    })
 
  
  registro(usuario: any, email: any, password: any) {
    this.UsuarioService.registrar(usuario.value, email.value, password.value).then(dato => {
  
  
      if(dato[0]==406){
        this.confirmar(dato['Mensaje']); 
       
      }
      else if(dato[0]==422){
      this.confirmar("no se permiten campos vacios"); 

      }
      else{
        this.frmRegistro.reset();
     this.confirmar(dato['Mensaje']);
      this.router.navigate(['home']);
      
      }
       
    

     
    })
  }

  async confirmar(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 3000
    });
    toast.present();
  }
}
