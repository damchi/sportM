import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachBoatListComponent } from './coach-boat-list.component';

const routes: Routes = [{ path: '', component: CoachBoatListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachBoatListRoutingModule { }
