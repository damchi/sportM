import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Auth} from "aws-amplify";
import {ConfirmDialogComponent} from "../../components/confirm-dialog/confirm-dialog.component";
import {UserType} from "../../domain/user-type";
import {PopupNewUserTypeComponent} from "../../components/popup-new-user-type/popup-new-user-type.component";
import {MembershipTypeService} from "../../services/membership-type.service";
import {ListMembershipTypesQuery} from "../../API.service";
import {BoatService} from "../../services/boat.service";

@Component({
  selector: 'app-coach-membership-type',
  templateUrl: './coach-membership-type.component.html',
  styleUrls: ['./coach-membership-type.component.css']
})
export class CoachMembershipTypeComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'option'];
  public userTypes: any [];
  public userType: UserType

  constructor(public dialog: MatDialog, private serviceUserType: MembershipTypeService, private serviceBoat: BoatService,) {
  }

  ngOnInit(): void {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async () => {
      this.getUserType();
    })
      .catch(err => console.error(err));
  }

  newUserType(userType?: UserType) {
    const dialogPop = this.dialog.open(PopupNewUserTypeComponent, {
      width: '750px',
      data: {
        userType: userType || new UserType(),
      }
    });

    dialogPop.afterClosed().subscribe(result => {
      if (result) {
        this.save(result);
      }
    });

  }

  getUserType() {
    this.serviceUserType.getUserType().then((userType: ListMembershipTypesQuery) => {
      this.userTypes = userType.items
    });
  }

  save(userType: UserType) {
    if (userType.id != null) {
      this.serviceUserType.updateUserType(userType).then(() => {
          this.getUserType();
        }
      )
    } else {
      this.serviceUserType.saveUserType(userType).then(() => {
          this.getUserType();
        }
      )
    }
  }

  deleteUserType(userType: UserType) {
    this.userType = userType;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Delete',
        message: 'Are you sure to delete this user Type ?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.doDelete();
      }
    });
  }

  doDelete() {
    let input = {
      id: this.userType.id
    }
    for (let i = 0; i < this.userType.boat.items.length; i++) {
      let inputMembership = {
        id: this.userType.boat.items[i].id
      }
      this.serviceBoat.deleteBoatMembershipType(inputMembership).then(r => {
        this.serviceUserType.deleteUserType(input).then(() => {
          return this.getUserType();
        })
      });
    }
  }

}
