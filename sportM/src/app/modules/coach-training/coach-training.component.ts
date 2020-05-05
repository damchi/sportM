import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PopupNewTrainingComponent} from "../../components/popup-new-training/popup-new-training.component";
import {TrainingS3} from "../../domain/training-s3";
import {S3Service} from "../../services/s3.service";
import {Storage} from "aws-amplify";
import moment from "moment";
import {ConfirmDialogComponent} from "../../components/confirm-dialog/confirm-dialog.component";


@Component({
  selector: 'app-coach-training',
  templateUrl: './coach-training.component.html',
  styleUrls: ['./coach-training.component.css']
})
export class CoachTrainingComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'start', 'end', 'daysOfTheWeek', 'option'];
  public trainings: TrainingS3[] = [];
  public trainingJson: TrainingS3[] = [];
  public training: TrainingS3;
  public keys = [];
  public days = [];
  public list = [];
  public isLoaded: boolean = false;


  constructor(public dialog: MatDialog, private serviceS3: S3Service) {
  }

   ngOnInit() {
     this.getS3TrainingNew();
  }

  newTraining(training?: TrainingS3) {
    const dialogPop = this.dialog.open(PopupNewTrainingComponent, {
      width: '750px',
      data: {
        training: training || new TrainingS3(),
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
    Storage.put('new/' + training.name.split(" ").join('_') + '.json', trainingJson, {level: 'public'})
      .then(() => {
        this.refresh();
      })
      .catch(err => console.log(err));
  }

  getS3TrainingNew() {
    this.getKeyListFromS3()
      .then(
        resultList => {
          resultList.forEach(key => {
            this.list.push(key);
            this.getJsonFromS3(key.key)
          });
        }
      )
      .catch(err => console.log(err));
  }

  getKeyListFromS3() {
    return Storage.list('new/');
  }

  getJsonFromS3(key){
    Storage.get(key, {level: 'public', download: true})
      .then( result => {
        this.trainings.push(JSON.parse(this.serviceS3.Utf8ArrayToStr(result['Body'])));
      })

      .then(() => {
          if (this.trainings.length == this.list.length) {
            this.isLoaded = true;
          }
        })
      .catch(err => console.log(err));
  }

  getDateToString(date: string) {
    return moment(date).format("dddd, MMMM Do YYYY");
  }

  getDaysToString(days) {
    this.days = [];
    days.forEach(r =>{
      this.days.push( moment().startOf('isoWeek').isoWeekday(r).format('dddd'));
    })
    return this.days;
  }

  deleteTraining(training: TrainingS3) {
    this.training = training;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Delete',
        message: 'Are you sure to delete this training template ?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.doDelete();
      }
    });
  }

  refresh(){
    this.isLoaded = false;
    this.trainings = [];
    this.list = [];
    this.getS3TrainingNew();
  }

  doDelete() {
    Storage.remove('new/' + this.training.name.split(" ").join('_') + '.json', { level: 'public' })
      .then(() => {
      this.refresh();
      })
      .catch(err => console.log(err));
  }
}
