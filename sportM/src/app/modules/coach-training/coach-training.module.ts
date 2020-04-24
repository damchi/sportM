import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoachTrainingComponent} from "./coach-training.component";
import {CoachTrainingRoutingModule} from "./coach-training-routing";
import {ShareModule} from "../share/share.module";
import { PopupNewTrainingComponent } from 'src/app/components/popup-new-training/popup-new-training.component';

@NgModule({
  declarations: [CoachTrainingComponent,PopupNewTrainingComponent],
  imports: [
    CommonModule,
    CoachTrainingRoutingModule,
    ShareModule
  ],
  entryComponents: [PopupNewTrainingComponent]
})
export class CoachTrainingModule { }
