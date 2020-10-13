import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Auth} from "aws-amplify";
import {ConfirmDialogComponent} from "../../components/confirm-dialog/confirm-dialog.component";
import {UserType} from "../../domain/user-type";
import {UserTypeService} from "../../services/user-type.service";
import {PopupNewUserTypeComponent} from "../../components/popup-new-user-type/popup-new-user-type.component";

@Component({
  selector: 'app-coach-user-type',
  templateUrl: './coach-user-type.component.html',
  styleUrls: ['./coach-user-type.component.css']
})
export class CoachUserTypeComponent implements OnInit {
  public displayedColumns: string[] = ['name','option'];
  public isLoadedUserType: boolean = false;
  public userTypes: UserType[];
  public userType: UserType

  constructor(public dialog: MatDialog, private serviceUserType: UserTypeService) {
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
