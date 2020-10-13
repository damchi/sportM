import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CoachUserTypeRoutingModule} from './coach-user-type-routing.module';
import { CoachUserTypeComponent } from './coach-user-type.component';
import {PopupNewUserTypeComponent} from "../../components/popup-new-user-type/popup-new-user-type.component";
import {ShareModule} from "../share/share.module";


@NgModule({
  declarations: [CoachUserTypeComponent,PopupNewUserTypeComponent],
  imports: [
    CommonModule,
    CoachUserTypeRoutingModule,
    ShareModule
  ],
  entryComponents: [PopupNewUserTypeComponent]
})
export class CoachUserTypeModule { }
