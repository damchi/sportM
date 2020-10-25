import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachBoatComponent } from './coach-boat.component';

const routes: Routes = [{ path: '', component: CoachBoatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachBoatRoutingModule { }
