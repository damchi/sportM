import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Training} from "../../domain/training";
import {AthleteService} from "../../services/athlete.service";
import {Athlete} from "../../domain/athlete";
import {Boat} from "../../domain/boat";
import {FormGroup} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {BoatService} from "../../services/boat.service";
import {PopupAssignBoatComponent} from "../popup-assign-boat/popup-assign-boat.component";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

export class PopupAssignAthlete {
  training: Training;
  boats: Boat[];
}

@Component({
  selector: 'app-popup-assign-boat',
  templateUrl: './popup-assign-athlete.component.html',
  styleUrls: ['./popup-assign-athlete.component.css']
})
export class PopupAssignAthleteComponent implements OnInit {
  public idsAthelte: string[];
  public boatsAvailable: Boat[];
  public athletes: Athlete[];
  public listChoice: Athlete[] = [];
  public isLoadedAthlete: boolean = false;
  public displayedColumnsBoat: string[] = ['select', 'name', 'weightCategory', 'type'];
  public dataSourceBoat: any;
  public selectionBoat = new SelectionModel<Boat>(true, []);


  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: PopupAssignAthlete,
              private serviceAthlete: AthleteService, public dialogPop: MatDialogRef<PopupAssignAthleteComponent>,) {
  }

  ngOnInit() {
    this.getAthelete();
    console.log(this.selectionBoat);
    this.dataSourceBoat = new MatTableDataSource<Boat>(this.data.boats);

  }

  getAthelete() {
    this.idsAthelte = [];
    for (let i = 0; i < this.data.training.athleteAttending.length; i++) {
        if (this.data.training.athleteAttending[i].attending == "1stChoice" || this.data.training.athleteAttending[i].attending == "2ndChoice")
          this.idsAthelte.push(this.data.training.athleteAttending[i].athleteID)
    }
    if (this.idsAthelte.length > 0){
      this.serviceAthlete.getByIds(this.idsAthelte).then((athlete) => {
        this.athletes = [];
        athlete.forEach(a => {
          this.athletes.push(a);
        });
        if (this.athletes.length > 0) {
          this.isLoadedAthlete = true;
        }
        console.log(this.athletes);
      });
    }
  }


  // assignBoat(athlete: Athlete) {
  //   const dialogPop = this.dialog.open(PopupAssignBoatComponent, {
  //     width: '750px',
  //     data: {
  //       athlete: athlete,
  //       boats: this.boatsAvailable
  //     }
  //   });
  //
  //   dialogPop.afterClosed().subscribe(result => {
  //     if (result) {
  //       // saveAs(result.trainingJson, ;
  //       // this.saveToDB(result);
  //     }
  //   });
  // }

  close() {
    this.dialogPop.close();
  }

  create() {

  }

  drop(event: CdkDragDrop<Athlete[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }



  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelectedBoat() {
    const numSelected = this.selectionBoat.selected.length;
    const numRows = this.dataSourceBoat.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggleBoat() {
    this.isAllSelectedBoat() ?
      this.selectionBoat.clear() :
      this.dataSourceBoat.data.forEach(row => this.selectionBoat.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabelBoat(row?: Boat): string {
    if (!row) {
      return `${this.isAllSelectedBoat() ? 'select' : 'deselect'} all`;
    }
    if (this.selectionBoat.selected.length > 0){
      console.log(this.selectionBoat);
      console.log('ee');
    }
    return `${this.selectionBoat.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

}
