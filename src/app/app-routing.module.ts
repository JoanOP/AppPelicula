import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'lottie',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'estrenos',
    loadChildren: () => import('./estrenos/estrenos.module').then( m => m.EstrenosPageModule)
  },
  {
    path: 'detalle-movie/:id',
    loadChildren: () => import('./detalle-movie/detalle-movie.module').then( m => m.DetalleMoviePageModule)
  },
  {
    path: 'trailer/:id',
    loadChildren: () => import('./trailer/trailer.module').then( m => m.TrailerPageModule)
  },
  {
    path: 'cartelera',
    loadChildren: () => import('./cartelera/cartelera.module').then( m => m.CarteleraPageModule)
  },
  {
    path: 'peliculas',
    loadChildren: () => import('./peliculas/peliculas.module').then( m => m.PeliculasPageModule)
  },
  {
    path: 'lottie',
    loadChildren: () => import('./lottie/lottie.module').then( m => m.LottiePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
