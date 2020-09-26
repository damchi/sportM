import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoachTrainingComponent} from "./coach-training.component";
import {CoachTrainingRoutingModule} from "./coach-training-routing";
import {ShareModule} from "../share/share.module";
import {PopupNewTrainingS3Component} from 'src/app/components/popup-new-training-s3/popup-new-training-s3.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {PopupNewTrainingDBComponent} from "../../components/popup-new-training-db/popup-new-training-db.component";
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [CoachTrainingComponent, PopupNewTrainingS3Component,PopupNewTrainingDBComponent],
  imports: [
    CommonModule,
    CoachTrainingRoutingModule,
    ShareModule,
    NgxMaterialTimepickerModule,
    MatSortModule
  ],
  entryComponents: [PopupNewTrainingS3Component,PopupNewTrainingDBComponent]
})
export class CoachTrainingModule {
}
