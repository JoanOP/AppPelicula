import { UsuarioService } from './../servicios/usuario.service';
import { BuscarService } from './../servicios/buscar.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-detalle-movie',
  templateUrl: './detalle-movie.page.html',
  styleUrls: ['./detalle-movie.page.scss'],
})
export class DetalleMoviePage implements OnInit {

  constructor(private route: ActivatedRoute,private buscarService:BuscarService,private usuarioService:UsuarioService,private  formBuilder:FormBuilder,private toast: ToastController) { }
  id:number;
  ArrayDetalle:any=[];
  usuario:string;
  ArrayComentarios:any=[];
  ngOnInit() {
    this.id=this.route.snapshot.params.id;
    this.VerDetalle(this.id);
    this.usuario=localStorage.getItem('usuario');
    this.verComentarios();
  }

  VerDetalle(id:number){
    this.buscarService.getDetalle(id).then(data=>{
      this.ArrayDetalle=data;
    
    })
  }

  frmComentar=this.formBuilder.group({
    comentario: ['',[Validators.required]],
  })


  Comentario(comentar:any){
  
    this.usuarioService.comentar(this.id,comentar.value,localStorage.getItem('idusuario')).then(data=>{
      if(data[0]==200){

        this.verComentarios();
        this.frmComentar.reset();
      }
      else{
       this.confirmar("Usuario no registrado");
      }
    })
  }
  
  verComentarios(){
    
    this.usuarioService.getComentarios(this.id).then(data=>{
      this.ArrayComentarios=data["Comentarios"];
      
    })
  }

  async confirmar(msj: string) {
    const toast = await this.toast.create({
      message: msj,
      duration: 3000
    });
    toast.present();
  }


  estado:boolean=false;
 
  vcoment(){
    this.estado=!this.estado;
   
  }
}
