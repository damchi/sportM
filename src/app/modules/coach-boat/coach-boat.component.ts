import {Component, OnInit} from '@angular/core';
import {ConfirmDialogComponent} from "../../components/confirm-dialog/confirm-dialog.component";
import {Boat} from "../../domain/boat";
import {MatDialog} from "@angular/material/dialog";
import {Auth} from 'aws-amplify';
import {PopupNewBoatComponent} from "../../components/popup-new-boat/popup-new-boat.component";
import {BoatService} from "../../services/boat.service";
import {BoatMemberType} from "../../domain/boat-member-type";
import {APIService, CreateBoatMemberTypeInput, CreateBoatMutation, ListBoatsQuery} from "../../API.service";
import moment from "moment";

@Component({
  selector: 'app-coach-boat',
  templateUrl: './coach-boat.component.html',
  styleUrls: ['./coach-boat.component.css']
})
export class CoachBoatComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'ownership', 'weightCategory', 'athleteCategory', 'sortOfBoat', 'note', 'active', 'option'];
  public boats: any [];
  public boat: Boat;
  public createBoatMemberTypeInputs: CreateBoatMemberTypeInput[] = [];

  constructor(public dialog: MatDialog, private serviceBoat: BoatService, private api: APIService) {
  }

  async ngOnInit() {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async () => {
    this.getBoat();

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
        this.save(result);
      }
    });

  }


  getBoat() {
    let filter = {
      deleted_at: {
        eq: null,
      }
    }
    this.serviceBoat.getBoats(filter).then((boats: ListBoatsQuery) =>
      this.boats = boats.items)
  }

  save(boat: Boat) {
    let memberId = boat.membershipType;
    delete boat.membershipType;
    if (boat.id != null) {
      this.serviceBoat.updateBoat(boat).then(() => {
          this.getBoat();
        }
      )
    } else {
      boat.deleted_at = null;
      this.serviceBoat.saveBoat(boat).then((result:CreateBoatMutation) => {
          for (let i = 0; i < memberId.length; i++) {
            const boatMembershipType = new BoatMemberType();
            boatMembershipType.boatId = result.id;
            boatMembershipType.memberId = memberId[i];
            this.createBoatMemberTypeInputs.push(boatMembershipType)
          }
          this.serviceBoat.saveBoatMemberType(this.createBoatMemberTypeInputs).then(()=> {
            this.getBoat();
          })
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
      id: this.boat.id,
      deleted_at: moment().format('YYYY-MM-DD')
    }
    this.serviceBoat.delete(input).then(() => {
       this.getBoat();
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
}
