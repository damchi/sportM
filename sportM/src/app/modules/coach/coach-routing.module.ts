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
      // {
      //   path: 'exercice',
      //   loadChildren: () => import('../coach-exercice/coach-exercice.module').then(m => m.CoachExerciceModule)
      // },
      // {
      //   path: 'planning',
      //   loadChildren: () => import('../coach-planning/coach-planning.module').then(m => m.CoachPlanningModule)
      // },
      // {
      //   path: 'typeExercice',
      //   loadChildren: () => import('../coach-type-exercice/coach-type-exercice.module').then(m => m.CoachTypeExerciceModule)
      // },
      {path: '**', redirectTo: '/coach'},
    ]

  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachRoutingModule { }
