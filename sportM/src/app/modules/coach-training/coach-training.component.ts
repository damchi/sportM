import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PopupNewTrainingComponent} from "../../components/popup-new-training/popup-new-training.component";
import {TrainingS3} from "../../domain/training-s3";
import {S3Service} from "../../services/s3.service";
import {Auth, Storage} from "aws-amplify";
import moment from "moment";
import {ConfirmDialogComponent} from "../../components/confirm-dialog/confirm-dialog.component";
import {Training} from "../../domain/training";
import {CoachTrainingService} from "../../services/coach-training.service";


@Component({
  selector: 'app-coach-training',
  templateUrl: './coach-training.component.html',
  styleUrls: ['./coach-training.component.css']
})
export class CoachTrainingComponent implements OnInit {
  public displayedColumnsS3: string[] = ['member', 'name', 'start', 'end', 'daysOfTheWeek', 'option'];
  public displayedColumns: string[] = ['member', 'day', 'time', 'attendee', 'statut', 'option'];
  public trainingsS3: TrainingS3[] = [];
  public trainingJson: TrainingS3[] = [];
  public trainingS3: TrainingS3;
  public trainings: Training[];
  public training: Training;
  public days = [];
  public list = [];
  public isLoadedS3: boolean = false;


  constructor(public dialog: MatDialog, private serviceS3: S3Service, private service: CoachTrainingService) {
  }

  ngOnInit() {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(() => {
      this.getTrainingDB().then((t)=> console.log(t));
    })
      .catch(err => console.error(err));
    this.getTrainingS3();
  }

  newTrainingS3(training?: TrainingS3) {
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
    Storage.put('new/' + training.name.split(" ").join('_') + '.json',
      trainingJson,
      {
        level: 'public', metadata: {
          trainingName: training.name.split(" ").join('_'),
          trainingDays: training.daysOfTheWeek.toString(),
          trainingStart: training.start.toString(),
          trainingEnd: training.end.toString(),
          trainingTime: training.time.toString(),
          trainingMemberCategory: training.memberCategory

        }
      })
      .then(() => {
        this.refresh();
      })
      .catch(err => console.log(err));
  }

  getTrainingS3() {
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

  async getTrainingDB() {
    let now ="2020-06-01";
    let end = "2020-06-07"
    let range = {
      trainingDate:{
        gt:now,
        lt: end
      }
    }
    await this.service.getTrainings(range).then(t => console.log(t));
  }

  getKeyListFromS3() {
    return Storage.list('new/');
  }

  getJsonFromS3(key) {
    Storage.get(key, {level: 'public', download: true})
      .then(result => {
        this.trainingsS3.push(JSON.parse(this.serviceS3.Utf8ArrayToStr(result['Body'])));
      })

      .then(() => {
        if (this.trainingsS3.length == this.list.length) {
          this.isLoadedS3 = true;
        }
      })
      .catch(err => console.log(err));
  }

  getDateToString(date: string) {
    return moment(date).format("dddd, MMMM Do YYYY");
  }

  getDaysToString(days) {
    this.days = [];
    days.forEach(r => {
      this.days.push(moment().startOf('isoWeek').isoWeekday(r).format('dddd'));
    })
    return this.days;
  }

  deleteTrainingS3(training: TrainingS3) {
    this.trainingS3 = training;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Delete',
        message: 'Are you sure to delete this training template ?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.doDeleteTrainingS3();
      }
    });
  }

  refresh() {
    this.isLoadedS3 = false;
    this.trainingsS3 = [];
    this.list = [];
    this.getTrainingS3();
  }

  doDeleteTrainingS3() {
    Storage.remove('new/' + this.trainingS3.name.split(" ").join('_') + '.json', {level: 'public'})
      .then(() => {
        this.refresh();
      })
      .catch(err => console.log(err));
  }
}
