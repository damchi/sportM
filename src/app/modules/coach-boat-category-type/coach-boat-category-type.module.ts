import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ShareModule} from "../share/share.module";
import {CoachBoatCategoryTypeComponent} from "./coach-boat-category-type.component";
import { PopupNewBoatCategoryTypeComponent } from 'src/app/components/popup-new-boat-category-type/popup-new-boat-category-type.component';
import {CoachBoatCategoryTypeRoutingModule} from "./coach-boat-category-type-routing.module";


@NgModule({
  declarations: [CoachBoatCategoryTypeComponent,PopupNewBoatCategoryTypeComponent],
  imports: [
    CommonModule,
    CoachBoatCategoryTypeRoutingModule,
    ShareModule
  ],
  entryComponents: [PopupNewBoatCategoryTypeComponent]
})
export class CoachBoatCategoryTypeModule { }
