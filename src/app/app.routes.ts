import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/pagina-inicial.component').then((module) => module.PaginaInicialComponente),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
