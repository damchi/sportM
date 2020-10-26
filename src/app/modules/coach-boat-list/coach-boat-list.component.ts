import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {BoatService} from "../../services/boat.service";
import { AthleteTrainingService } from 'src/app/services/athlete-training.service';
import {Training} from "../../domain/training";
import {ListBoatsQuery, ListMembershipTypesQuery} from "../../API.service";
import {MembershipTypeService} from "../../services/membership-type.service";
import {MatTableDataSource} from "@angular/material/table";
import moment from "moment";
import {MatOptionSelectionChange} from "@angular/material/core";
import {PopupAssignAthleteComponent} from "../../components/popup-assign-athlete/popup-assign-athlete.component";

@Component({
  selector: 'app-coach-boat-list',
  templateUrl: './coach-boat-list.component.html',
  styleUrls: ['./coach-boat-list.component.css']
})
export class CoachBoatListComponent implements OnInit {
  public boatListForm: FormGroup;
  public userTypes: any [];
  public trainings: any[];
  public boats: any [];
  public dateStartTraining: any;
  public dateEndTraining: any;
  public week: number;
  public filter: object;
  public selection = new SelectionModel<Training>(true, []);
  public displayedColumns: string[] = ['select', 'day', 'time', 'option'];
  public dataSource: any;

  constructor(public dialog: MatDialog, private fb: FormBuilder, private serviceAthleteTraining: AthleteTrainingService,
              private serviceBoat: BoatService, private serviceUserType: MembershipTypeService) {
  }


  ngOnInit(): void {
    this.getRole();
    this.getBoat();
    this.boatListForm = this.fb.group({
      memberCategory: new FormControl('', [Validators.required]),
    });
  }


  getRole() {
    this.serviceUserType.getUserType().then((type: ListMembershipTypesQuery) => {
      this.userTypes = type.items;
    });
  }

  getBoat() {
    this.serviceBoat.getBoats().then((boats: ListBoatsQuery) => {
        this.boats = boats.items
      }
    )
  }

  getTraining(event: MatOptionSelectionChange) {
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
      this.trainings = training.items;
      if (this.trainings.length > 0){
        this.dataSource = new MatTableDataSource<Training>(this.trainings);
        console.log(this.dataSource);
      }
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  // masterToggle() {
  //   this.isAllSelected() ?
  //     this.selection.clear() :
  //     this.dataSource.data.forEach(row => this.selection.select(row));
  // }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Training): string {
    // if (!row) {
    //   return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    // }
    // return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  getDateToString(date: string) {
    return moment(date).format("dddd, MMMM Do YYYY");
  }

  assignAthlete(training: Training) {
    const dialogPop = this.dialog.open(PopupAssignAthleteComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      data: {
        training: training,
        boats: this.boats
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
