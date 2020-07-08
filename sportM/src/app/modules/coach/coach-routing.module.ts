import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachComponent } from './coach.component';

const routes: Routes = [
  { path: '',
    component: CoachComponent,
    children: [
      {
        path: 'athlete',
        loadChildren: () => import('../coach-list-athelete/coach-list-athelete.module').then(m => m.CoachListAtheleteModule)
      },
      {
        path: 'training',
        loadChildren: () => import('../coach-training/coach-training.module').then(m => m.CoachTrainingModule)
      },
      {
        path: 'boatList',
        loadChildren: () => import('../coach-boat-list/coach-boat-list.module').then(m => m.CoachBoatListModule)
      },
      {
        path: 'boats',
        loadChildren: () => import('../coach-boats/coach-boats.module').then(m => m.CoachBoatsModule)
      },
      // {
      //   path: 'typeExercice',
      //   loadChildren: () => import('../coach-type-exercice/coach-type-exercice.module').then(m => m.CoachTypeExerciceModule)
      // },
      {path: '**', redirectTo: '/coach/training'},
    ]

  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachRoutingModule { }
