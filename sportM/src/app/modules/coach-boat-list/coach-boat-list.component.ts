import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import * as roleJson from "../../config/role.json";
import {Membership} from "../../domain/membership";
import moment from "moment";
import {Training} from "../../domain/training";
import {MatOptionSelectionChange} from "@angular/material/core";
import {AthleteTrainingService} from "../../services/athlete-training.service";
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from "@angular/material/table";
import {PopupNewTrainingDBComponent} from "../../components/popup-new-training-db/popup-new-training-db.component";
import {PopupAssignBoatComponent} from "../../components/popup-assign-boat/popup-assign-boat.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-coach-boat-list',
  templateUrl: './coach-boat-list.component.html',
  styleUrls: ['./coach-boat-list.component.css']
})
export class CoachBoatListComponent implements OnInit {
  public boatListForm: FormGroup;
  public membershipType: Membership[] = [];
  public trainings: Training[];
  public dateStartTraining: any;
  public dateEndTraining: any;
  public week: number;
  public filter: object;
  public selection = new SelectionModel<Training>(true, []);
  public displayedColumns: string[] = ['select', 'day', 'time', 'option'];
  public dataSource: any;
  public isLoadedTraining: boolean = false;


  constructor(public dialog: MatDialog, private fb: FormBuilder, private serviceAthleteTraining: AthleteTrainingService) {
  }

  ngOnInit() {
    this.getRole();
    this.boatListForm = this.fb.group({
      memberCategory: new FormControl('', [Validators.required]),
    });

  }

  getRole() {
    this.membershipType = roleJson.membershipType;
  };


  getTraining(event: MatOptionSelectionChange) {
    this.isLoadedTraining = false;
    this.trainings = [];
    this.week = moment().isoWeek() + 1;
    this.dateStartTraining = moment().startOf('week').add(7, 'days');
    this.dateEndTraining = moment().startOf('week').add(14, 'days');

    this.filter = {
      trainingDate: {
        ge: this.dateStartTraining,
        le: this.dateEndTraining
      },
      athleteCategory: {
        contains: event.source.value
      },
      statut: {
        eq: true
      }
    }

    let limit = 10000;
    this.serviceAthleteTraining.getTrainings(this.filter, limit).then((training) => {
      this.idsAthelte = [];
      for (let i = 0; i < training.items.length; i++) {
        this.trainings[i] = {
          id: training.items[i].id,
          trainingDate: training.items[i].trainingDate,
          trainingTime: training.items[i].trainingTime,
          athleteCategory: training.items[i].athleteCategory,
          statut: training.items[i].statut,
          athleteAttending: training.items[i].athleteAttending.items
        };
        // this.trainingAttendenceForm.addControl('presence' + i, new FormControl('', [Validators.required]));
      }

      this.dataSource = new MatTableDataSource<Training>(this.trainings);
      this.isLoadedTraining = true;
    });
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Training): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  getDateToString(date: string) {
    return moment(date).format("dddd, MMMM Do YYYY");
  }

  assignBoat(training) {
    const dialogPop = this.dialog.open(PopupAssignBoatComponent, {
      width: '750px',
      data: {
        training: training ,
      }
    });

    dialogPop.afterClosed().subscribe(result => {
      if (result) {
        // saveAs(result.trainingJson, ;
        // this.saveToDB(result);
      }
    });
  }
}
