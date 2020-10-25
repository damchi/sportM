import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoachMembershipTypeComponent } from './coach-membership-type.component';


const routes: Routes = [{ path: '', component: CoachMembershipTypeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoachMembersipTypeRoutingModule { }
