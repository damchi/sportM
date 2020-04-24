import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PopupNewTrainingComponent} from "../../components/popup-new-training/popup-new-training.component";
import {TrainingS3} from "../../domain/training-s3";
import {S3Service} from "../../services/s3.service";

@Component({
  selector: 'app-coach-training',
  templateUrl: './coach-training.component.html',
  styleUrls: ['./coach-training.component.css']
})
export class CoachTrainingComponent implements OnInit {
  public displayedColumns: string[] = [ 'start', 'end', 'daysOfTheWeek','option'];
  public trainings: TrainingS3[];
  public training: TrainingS3;

  constructor(public dialog: MatDialog, private serviceS3: S3Service) { }

  ngOnInit() {
  }

  newTraining(training?: TrainingS3) {
    const dialogPop = this.dialog.open(PopupNewTrainingComponent, {
      width: '750px',
      data: { training: training || new TrainingS3() ,
      }
    });

    dialogPop.afterClosed().subscribe(result => {
      if (result) {
        this.save(result.training);
      }
    });

  }


  save(training: TrainingS3) {
    // this.service.save(training).subscribe(
    //   () => {
    //     this.getAll();
    //   },
    //   error => {
    //     this.alertService.error(error);
    //   });
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
