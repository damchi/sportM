import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AthleteComponent } from './athlete.component';

const routes: Routes = [
  { path: '',
    component: AthleteComponent,
    children: [
      {
        path: 'training',
        loadChildren: () => import('../athlete-training/athlete-training.module').then(m => m.AthleteTrainingModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../athlete-profile/athlete-profile.module').then(m => m.AthleteProfileModule)
      },
      // {
      //   path: 'regatta',
      //   loadChildren: () => import('../athletes-regatta/athletes-regatta.module').then(m => m.AthletesRegattaModule)
      // },
      // {
      //   path: 'crew',
      //   loadChildren: () => import('../athletes-crew/athletes-crew.module').then(m => m.AthletesCrewModule)
      // },
      {
        path: 'logout',
        // loadChildren: () => import('../athletes-planning/athletes-planning.module').then(m => m.CoachPlanningModule)
      },
      {path: '**', redirectTo: '/athlete/profile'},
    ]

  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AthleteRoutingModule { }
