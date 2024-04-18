import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'about',loadComponent:()=> import('./view/about/about.component').then(c=>c.AboutComponent)}
];
