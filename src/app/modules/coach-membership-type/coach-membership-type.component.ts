import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Auth} from "aws-amplify";
import {ConfirmDialogComponent} from "../../components/confirm-dialog/confirm-dialog.component";
import {UserType} from "../../domain/user-type";
import {PopupNewUserTypeComponent} from "../../components/popup-new-user-type/popup-new-user-type.component";
import {MembershipTypeService} from "../../services/membership-type.service";

@Component({
  selector: 'app-coach-membership-type',
  templateUrl: './coach-membership-type.component.html',
  styleUrls: ['./coach-membership-type.component.css']
})
export class CoachMembershipTypeComponent implements OnInit {
  public displayedColumns: string[] = ['name','option'];
  public isLoadedUserType: boolean = false;
  public userTypes: UserType[];
  public userType: UserType

  constructor(public dialog: MatDialog, private serviceUserType: MembershipTypeService) {
  }

  ngOnInit(): void {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async () => {
      await this.getUserType();
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

  async getUserType() {

    this.userTypes = [];
    await this.serviceUserType.getUserType().then((userType) => {
      for (let i = 0; i < userType.items.length; i++) {
        this.userTypes[i] = {
          id: userType.items[i].id,
          type: userType.items[i].type,
        };
      }
      this.isLoadedUserType = true
    });
  }

  save(userType: UserType) {
    if (userType.id != null) {
      this.serviceUserType.updateUserType(userType).then(() => {
          this.isLoadedUserType = false;
          this.getUserType();
        }
      )
    } else {
      this.serviceUserType.saveUserType(userType).then(() => {
          this.isLoadedUserType = false;
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
    this.serviceUserType.deleteUserType(input).then(() => {
      this.isLoadedUserType = false;
      return this.getUserType();
    })
  }

}
