import {Component, Inject, OnInit} from '@angular/core';
import {Training} from "../../domain/training";
import {SelectionModel} from "@angular/cdk/collections";
import {Boat} from "../../domain/boat";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Athlete} from "../../domain/athlete";
import {MatTableDataSource} from "@angular/material/table";

export class PopupAssignBoat {
  athlete: Athlete;
  boats: Boat[];
}

@Component({
  selector: 'app-popup-assign-boat',
  templateUrl: './popup-assign-boat.component.html',
  styleUrls: ['./popup-assign-boat.component.css']
})
export class PopupAssignBoatComponent implements OnInit {
  public selection = new SelectionModel<Boat>(true, []);
  public dataSource: any;
  public boats: Boat[];
  public displayedColumns: string[] = ['select', 'name', 'weightCategory', 'type', 'option'];


  constructor(@Inject(MAT_DIALOG_DATA) public data: PopupAssignBoat, public dialogPop: MatDialogRef<PopupAssignBoatComponent>) {
  }

  ngOnInit() {
    this.getWeigthCategoryBoat();
    this.dataSource = new MatTableDataSource<Boat>(this.boats);

  }

  getWeigthCategoryBoat() {
    this.boats = [];
    this.data.boats.map((boat) => {
      if (boat.weightCategory == this.data.athlete.weightCategory) {
        this.boats.push(boat);
      }
    });
    return this.boats;
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
  checkboxLabel(row?: Boat): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  close() {
    this.dialogPop.close();
  }

  create() {

  }
}
