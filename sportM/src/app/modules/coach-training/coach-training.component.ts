import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PopupNewTrainingS3Component} from "../../components/popup-new-training-s3/popup-new-training-s3.component";
import {TrainingS3} from "../../domain/training-s3";
import {S3Service} from "../../services/s3.service";
import {Auth, Storage} from "aws-amplify";
import moment from "moment";
import {ConfirmDialogComponent} from "../../components/confirm-dialog/confirm-dialog.component";
import {Training} from "../../domain/training";
import {CoachTrainingService} from "../../services/coach-training.service";
import {PopupNewTrainingDBComponent} from "../../components/popup-new-training-db/popup-new-training-db.component";


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
  public test = new Training();
  public days = [];
  public list = [];
  public isLoadedS3: boolean = false;
  public isLoadedTraining: boolean = false;


  constructor(public dialog: MatDialog, private serviceS3: S3Service, private service: CoachTrainingService) {

  }

  ngOnInit() {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async () => {
      await this.getTrainingDB();
    })
      .catch(err => console.error(err));

    this.getTrainingS3();
  }

  newTrainingS3(training?: TrainingS3) {
    const dialogPop = this.dialog.open(PopupNewTrainingS3Component, {
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

  newTrainingDB(training?: Training) {
    const dialogPop = this.dialog.open(PopupNewTrainingDBComponent, {
      width: '750px',
      data: {
        training: training || new Training(),
      }
    });

    dialogPop.afterClosed().subscribe(result => {
      if (result) {
        // saveAs(result.trainingJson, ;
        this.saveToDB(result);
      }
    });

  }


  saveToDB(training: Training) {
    if (training.id != null) {
      this.service.updateTrainingDb(training).then(() => {
          this.isLoadedTraining = false
          return this.getTrainingDB();
        }
      )
    } else {
      this.service.saveTrainingDb(training).then(() => {
          this.isLoadedTraining = false;
          return this.getTrainingDB();
        }
      )
    }
  }

  saveToS3(training: TrainingS3, trainingJson: Blob) {
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
    this.trainings = [];
    let now = moment().format("YYYY-MM-DD");
    let end = moment(now,"YYYY-MM-DD").add(7,'days');
    console.log(now);
    console.log(end);

    let range = {
      trainingDate: {
        ge: now,
        le: end
      }
    }
    await this.service.getTrainings(range).then((training) => {
      for (let i = 0; i < training.items.length; i++) {
        this.trainings[i] = {
          id: training.items[i].id,
          trainingDate: training.items[i].trainingDate,
          trainingTime: training.items[i].trainingTime,
          athleteCategory: training.items[i].athleteCategory,
          statut: training.items[i].statut,
          athleteAttending: null
        };
      }
      this.isLoadedTraining = true
    });
  }

  getKeyListFromS3() {
    return Storage.list('new/');
  }

  getJsonFromS3(key: string) {
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

  getDaysToString(days: string[]) {
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

  deleteTrainingDB(training: Training) {
    this.training = training;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Delete',
        message: 'Are you sure to delete this training ?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.doDeleteTrainingDB();
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

  doDeleteTrainingDB() {
    let input = {
      id: this.training.id
    }
    this.service.deleteTrainingDB(input).then(() => {
      this.isLoadedTraining = false;
      return this.getTrainingDB();
    })
  }
}
