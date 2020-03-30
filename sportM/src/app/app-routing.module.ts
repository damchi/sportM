import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from "./components/auth/auth.component";
import {AuthGuard} from "./guard/auth.guard";

const routes: Routes = [
  {
    path: 'athlete',
    loadChildren: () => import('./modules/athlete/athlete.module').then(m => m.AthleteModule), canActivate: [AuthGuard]
  },
  {
    path: 'coach',
    loadChildren: () => import('./modules/coach/coach.module').then(m => m.CoachModule), canActivate: [AuthGuard]
  },
  { path: '', component: AuthComponent },
  { path: '**', redirectTo: 'AuthComponent' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
