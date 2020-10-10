import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { Auth } from 'aws-amplify';
import {ConfirmDialogComponent} from "../../components/confirm-dialog/confirm-dialog.component";
import {PopupNewBoatCategoryTypeComponent} from "../../components/popup-new-boat-category-type/popup-new-boat-category-type.component";
import {BoatCategoryType} from "../../domain/boat-category-type";
import {BoatCategoryTypeService} from "../../services/boat-category-type.service";

@Component({
  selector: 'app-coach-boat-category-type',
  templateUrl: './coach-boat-category-type.component.html',
  styleUrls: ['./coach-boat-category-type.component.css']
})
export class CoachBoatCategoryTypeComponent implements OnInit {
  public displayedColumns: string[] = ['name','option'];
  public isLoadedBoat: boolean = false;
  public boatCategoryTypes: BoatCategoryType[];
  public boatCategoryType: BoatCategoryType

  constructor(public dialog: MatDialog, private serviceBoatCategoryType: BoatCategoryTypeService) {
  }

  ngOnInit() {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async () => {
      await this.getBoatCategoryType();
    })
      .catch(err => console.error(err));
  }

  newBoatCategory(boatCategoryType?: BoatCategoryType) {
    const dialogPop = this.dialog.open(PopupNewBoatCategoryTypeComponent, {
      width: '750px',
      data: {
        boatCategoryType: boatCategoryType || new BoatCategoryType(),
      }
    });

    dialogPop.afterClosed().subscribe(result => {
      if (result) {
        this.save(result);
      }
    });

  }

  async getBoatCategoryType() {

    this.boatCategoryTypes = [];
    await this.serviceBoatCategoryType.getBoatCategoryType().then((boatCategoryType) => {
      for (let i = 0; i < boatCategoryType.items.length; i++) {
        this.boatCategoryTypes[i] = {
          id: boatCategoryType.items[i].id,
          type: boatCategoryType.items[i].type,
        };
      }
      this.isLoadedBoat = true
    });
  }

  save(ownerType: BoatCategoryType) {
    if (ownerType.id != null) {
      this.serviceBoatCategoryType.updateBoatCategoryType(ownerType).then(() => {
        this.isLoadedBoat = false;
        this.getBoatCategoryType();
        }
      )
    } else {
      this.serviceBoatCategoryType.saveBoatCategoryType(ownerType).then(() => {
        this.isLoadedBoat = false;
        this.getBoatCategoryType();
        }
      )
    }
  }

  deleteBoat(ownerType: BoatCategoryType) {
    this.boatCategoryType = ownerType;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Delete',
        message: 'Are you sure to delete this Boat Ownership Type ?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.doDeleteBoat();
      }
    });
  }

  doDeleteBoat() {
    let input = {
      id: this.boatCategoryType.id
    }
    this.serviceBoatCategoryType.deleteBoatCategoryType(input).then(() => {
      this.isLoadedBoat = false;
      return this.getBoatCategoryType();
    })
  }
}
