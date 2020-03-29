import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShareModule} from "../share/share.module";
import {AthleteProfileComponent} from './athlete-profile.component';
import {AthleteProfileRoutingModule} from "./athlete-profile-routing";

@NgModule({
  declarations: [AthleteProfileComponent],
  imports: [
    CommonModule,
    AthleteProfileRoutingModule,
    ShareModule
  ]
})
export class AthleteProfileModule { }
