import { UsuarioService } from './../servicios/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private router: Router, public loadingController: LoadingController,private usuarioService:UsuarioService,private formBuilder:FormBuilder) { }
    estado:boolean;
    usuario:string;
    imagen:any;
    
  ngOnInit() {
    this.estado=false;
    this.usuario=localStorage.getItem('usuario');
    
  }
frmPerfil=this.formBuilder.group({
  usuario: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(15)]],

})

  obtenerImagen(imagen:Event){
   this.imagen=(<HTMLInputElement>imagen.target).files[0];
   console.log(this.imagen);
  }

  cerrarSesion() {
    this.presentLoading();

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Espere por favor...',
      duration: 1000
    });
    await loading.present();

    const {
      role,
      data
    } = await loading.onDidDismiss();
    localStorage.clear();
    this.router.navigate(['home']);
  }

  actualizarData(user:any){
    
    let dato={user:user.value,foto:this.imagen}
    this.usuarioService.updateUser(dato).then(data=>{
    this.estado=true;
    this.frmPerfil.reset();
    })
  }

  
}
