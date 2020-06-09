import {Component, Inject, OnInit} from '@angular/core';
import {Training} from "../../domain/training";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {StructureError} from "../../../utils/structure-error";
import {MarkAsTouch} from "../../../utils/mark-as-touch";
import * as roleJson from "../../config/role.json";
import {Membership} from "../../domain/membership";
import moment from 'moment';

export class PopupTraining {
  training: Training;
}

export class ErrorMessages {
  trainingDate: StructureError[];
  trainingTime: StructureError[];
  athleteCategory: StructureError[];
  statut: StructureError[];
  athleteAttending: StructureError[];
}

@Component({
  selector: 'app-popup-new-training-db',
  templateUrl: './popup-new-training-db.component.html',
  styleUrls: ['./popup-new-training-db.component.css']
})
export class PopupNewTrainingDBComponent extends MarkAsTouch implements OnInit {
  public trainFormDb: FormGroup;
  public errorMessages: ErrorMessages;
  public membershipType: Membership[];

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: PopupTraining,
              public dialogPop: MatDialogRef<PopupNewTrainingDBComponent>) {
    super();
  }

  ngOnInit() {
    console.log(this.data);
    this.trainFormDb = this.fb.group({
      trainingDate: new FormControl(this.data.training.trainingDate, [Validators.required]),
      trainingTime: new FormControl(this.data.training.trainingTime, [Validators.required]),
      athleteCategory: new FormControl(this.data.training.athleteCategory, [Validators.required]),
      statut: new FormControl(this.data.training.statut, [Validators.required]),
      athleteAttending: new FormControl(this.data.training.athleteAttending),
    });

    this.errorMessages = {
      trainingDate: [
        {type: 'required', message: 'the training date is required'}
      ],
      trainingTime: [
        {type: 'required', message: 'the training time is required'}
      ],
      athleteCategory: [
        {type: 'required', message: 'The membership category is required'}
      ],
      statut: [
        {type: 'required', message: 'The Training status are required'}
      ],
      athleteAttending: [
        {type: 'required', message: 'Training\'s time is required'}
      ]
    };
    this.getRole();
  }

  getRole() {
    this.membershipType = roleJson.membershipType;
  };

  close() {
    this.dialogPop.close();
  }
  create() {
    if (this.trainFormDb.valid) {

      const t = this.trainFormDb.value;
      const e = new Training();
      e.id = this.data.training.id
      e.trainingDate = moment(t.trainingDate).format("YYYY-MM-DD");
      e.trainingTime = t.trainingTime;
      e.athleteCategory = t.athleteCategory;
      e.statut = t.statut;

      this.dialogPop.close(e);

    } else {
      this.markAsTouched(this.trainFormDb);
    }
  }
}
