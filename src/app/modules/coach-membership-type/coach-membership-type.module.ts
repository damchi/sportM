import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PopupNewUserTypeComponent} from "../../components/popup-new-user-type/popup-new-user-type.component";
import {ShareModule} from "../share/share.module";
import {CoachMembershipTypeComponent} from "./coach-membership-type.component";
import {CoachMembersipTypeRoutingModule} from "./coach-membersip-type-routing.module";


@NgModule({
  declarations: [CoachMembershipTypeComponent,PopupNewUserTypeComponent],
  imports: [
    CommonModule,
    CoachMembersipTypeRoutingModule,
    ShareModule
  ],
  entryComponents: [PopupNewUserTypeComponent]
})
export class CoachMembershipTypeModule { }
