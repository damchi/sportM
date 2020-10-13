import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachUserTypeComponent } from './coach-user-type.component';

const routes: Routes = [{ path: '', component: CoachUserTypeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachUserTypeRoutingModule { }
