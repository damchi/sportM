import {Component, OnInit} from '@angular/core';
import {ConfirmDialogComponent} from "../../components/confirm-dialog/confirm-dialog.component";
import {Boat} from "../../domain/boat";
import {MatDialog} from "@angular/material/dialog";
import {Auth} from 'aws-amplify';
import {PopupNewBoatComponent} from "../../components/popup-new-boat/popup-new-boat.component";
import {BoatService} from "../../services/boat.service";
import {BoatMemberType} from "../../domain/boat-member-type";
import {
  CreateBoatMemberShipTypeInput,
  CreateBoatMutation,
  ListBoatsQuery, UpdateBoatMembershipTypeInput,
  UpdateBoatMutation
} from "../../API.service";

@Component({
  selector: 'app-coach-boat',
  templateUrl: './coach-boat.component.html',
  styleUrls: ['./coach-boat.component.css']
})
export class CoachBoatComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'ownership', 'weightCategory', 'athleteCategory', 'sortOfBoat', 'note', 'active', 'option'];
  public boats: any [];
  public boat: Boat;
  public createBoatMemberShipTypeInputs: CreateBoatMemberShipTypeInput[] = [];
  public updateBoatMembershipTypeInputs: UpdateBoatMembershipTypeInput[] = [];

  constructor(public dialog: MatDialog, private serviceBoat: BoatService) {
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
    this.serviceBoat.getBoats().then((boats: ListBoatsQuery) => {
        this.boats = boats.items
      }
    )
  }

  save(boat: Boat) {
    let membershipType = boat.membershipType;
    delete boat.membershipType;
    if (boat.id != null) {
      this.serviceBoat.updateBoat(boat).then((boatUpdate: UpdateBoatMutation) => {

          const idMembership = membershipType.map(e => e.id);
          const idOldMembership = boatUpdate.membershipType.items.map(e => e.membershipId);

          membershipType.some((r) => {
            if (!idOldMembership.includes(r.id)) {
              let input = {
                boatId: boatUpdate.id,
                membershipId: r.id,
              }
              this.serviceBoat.saveBoatMembershipType(input).then((r) => {
                this.getBoat();
              })
            }
          })

          boatUpdate.membershipType.items.some((old) => {
            if (!idMembership.includes(old.membershipId)) {
              let inputDelete = {
                id: old.id,
              }
              this.serviceBoat.deleteBoatMembershipType(inputDelete).then((r) => {
                this.getBoat();
              })
            }
          })
        }
      )
    } else {
      this.serviceBoat.saveBoat(boat).then((result: CreateBoatMutation) => {
          for (let i = 0; i < membershipType.length; i++) {
            const boatMembershipType = new BoatMemberType();
            boatMembershipType.boatId = result.id;
            boatMembershipType.membershipId = membershipType[i].id;
            this.createBoatMemberShipTypeInputs.push(boatMembershipType)
          }
          this.serviceBoat.saveBatchBoatMemberType(this.createBoatMemberShipTypeInputs).then((r) => {
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
    let inputBoat = {
      id: this.boat.id
    }
    for (let i = 0; i < this.boat.membershipType.items.length; i++) {
      let inputMembership = {
        id: this.boat.membershipType.items[i].id
      }
      this.serviceBoat.deleteBoatMembershipType(inputMembership).then(r => {
        this.serviceBoat.delete(inputBoat).then(() => {
          this.getBoat();
        })
      });
    }
  }
}
