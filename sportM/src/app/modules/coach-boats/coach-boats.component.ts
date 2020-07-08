import {Component, OnInit} from '@angular/core';
import {Boat} from "../../domain/boat";
import {MatDialog} from "@angular/material/dialog";
import {PopupNewBoatComponent} from "../../components/popup-new-boat/popup-new-boat.component";
import {BoatService} from "../../services/boat.service";
import {Auth} from "aws-amplify";
import {Training} from "../../domain/training";
import {ConfirmDialogComponent} from "../../components/confirm-dialog/confirm-dialog.component";
import {throwMatMenuInvalidPositionX} from "@angular/material/menu/typings/menu-errors";

@Component({
  selector: 'app-coach-boats',
  templateUrl: './coach-boats.component.html',
  styleUrls: ['./coach-boats.component.css']
})
export class CoachBoatsComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'ownership', 'weightCategory', 'athleteCategory', 'sortOfBoat', 'note', 'active', 'option'];
  public isLoadedBoat: boolean = false;
  public boats: Boat[];
  public boat: Boat;

  constructor(public dialog: MatDialog, private serviceBoat: BoatService) {
  }

  ngOnInit() {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async () => {
      await this.getBoat();
    })
      .catch(err => console.error(err));
  }

  newBoat(boat?: Boat) {
    const dialogPop = this.dialog.open(PopupNewBoatComponent, {
      width: '750px',
      data: {
        boat: boat || new Boat(),
      }
    });

    dialogPop.afterClosed().subscribe(result => {
      if (result) {
        // saveAs(result.trainingJson, ;
        this.save(result);
      }
    });

  }

  async getBoat() {

    this.boats = [];
    await this.serviceBoat.getBoats().then((boat) => {
      console.log(boat);
      for (let i = 0; i < boat.items.length; i++) {
        this.boats[i] = {
          id: boat.items[i].id,
          name: boat.items[i].name,
          ownership: boat.items[i].ownership,
          weightCategory: boat.items[i].weightCategory,
          membershipType: boat.items[i].membershipType,
          sortOfBoat: boat.items[i].sortOfBoat,
          note: boat.items[i].note,
          active: boat.items[i].active,
        };
      }
      this.isLoadedBoat = true
    });
  }

  save(boat: Boat) {
    if (boat.id != null) {
      this.serviceBoat.updateBoat(boat).then(() => {
          // this.isLoadedTraining = false
          // return this.getTrainingDB();
        }
      )
    } else {
      this.serviceBoat.saveBoat(boat).then(() => {
          // this.isLoadedTraining = false;
          // return this.getTrainingDB();
        }
      )
    }
  }

  deleteBoat(boat: Boat) {
    this.boat = boat;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Delete',
        message: 'Are you sure to delete this training ?'
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
      id: this.boat.id
    }
    this.serviceBoat.delete(input).then(() => {
      this.isLoadedBoat = false;
      return this.getBoat();
    })
  }

  membershipToString(membersihp) {
    const text = JSON.parse(membersihp).role;
    let output = "";
    for (let i = 0; i < text.length; i++) {
      output += text[i].type + ' '
    }
    return output;
  }

  ownershipToString(ownership) {
    // const text = JSON.parse(ownership).role;
    // let output = "";
    // for (let i = 0; i < text.length; i++) {
    //   output += text[i].type + ' '
    // }
    // return output;
  }
}
