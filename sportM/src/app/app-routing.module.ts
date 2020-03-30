import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from "./components/auth/auth.component";

const routes: Routes = [
  {
    path: 'athlete',
    loadChildren: () => import('./modules/athlete/athlete.module').then(m => m.AthleteModule)
  },
  { path: '', component: AuthComponent },
  { path: '**', redirectTo: 'AuthComponent' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
