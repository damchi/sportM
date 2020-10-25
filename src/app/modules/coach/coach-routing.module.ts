import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachComponent } from './coach.component';

const routes: Routes = [
  { path: '',
    component: CoachComponent,
    children: [
      {
        path: 'athlete',
        loadChildren: () => import('../coach-list-athlete/coach-list-athlete.module').then(m => m.CoachListAthleteModule)
      },
      {
        path: 'training',
        loadChildren: () => import('../coach-training/coach-training.module').then(m => m.CoachTrainingModule)
      },
      {
        path: 'membership',
        loadChildren: () => import('../coach-membership-type/coach-membership-type.module').then(m => m.CoachMembershipTypeModule)
      },

      { path: 'boat',
        loadChildren: () => import('../coach-boat/coach-boat.module').then(m => m.CoachBoatModule)
      },


  // {
      //   path: 'planning',
      //   loadChildren: () => import('../coach-planning/coach-planning.module').then(m => m.CoachPlanningModule)
      // },
      // {
      //   path: 'typeExercice',
      //   loadChildren: () => import('../coach-type-exercice/coach-type-exercice.module').then(m => m.CoachTypeExerciceModule)
      // },
      {path: '**', redirectTo: '/coach/training'},
    ]

  },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachRoutingModule { }
