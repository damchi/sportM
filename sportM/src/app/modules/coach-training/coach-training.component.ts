import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PopupNewTrainingComponent} from "../../components/popup-new-training/popup-new-training.component";
import {TrainingS3} from "../../domain/training-s3";
import {S3Service} from "../../services/s3.service";
import {saveAs} from 'file-saver';


@Component({
  selector: 'app-coach-training',
  templateUrl: './coach-training.component.html',
  styleUrls: ['./coach-training.component.css']
})
export class CoachTrainingComponent implements OnInit {
  public displayedColumns: string[] = [ 'name','start', 'end', 'daysOfTheWeek','option'];
  public trainings: TrainingS3[];
  public training: TrainingS3;

  constructor(public dialog: MatDialog, private serviceS3: S3Service) { }

  ngOnInit() {
  }

  newTraining(training?: TrainingS3) {
    const dialogPop = this.dialog.open(PopupNewTrainingComponent, {
      width: '750px',
      data: { training: training || new TrainingS3() ,
        trainingJson: Object
      }
    });

    dialogPop.afterClosed().subscribe(result => {
      if (result) {
         // saveAs(result.trainingJson, ;
        this.saveToS3(result.training, result.trainingJson);
      }
    });

  }


  saveToS3(training, trainingJson) {
    this.serviceS3.uploadFile(trainingJson,training);
  }


  deleteTraining(training: TrainingS3) {
    // this.training = training;
    // const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    //   width: '350px',
    //   data: {
    //     title: 'Suppression',
    //     message: 'Êtes-vous sûr de vouloir supprimer cet entrainement?'
    //   }
    // });
    //
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.doDelete();
    //   }
    // });
  }
}
