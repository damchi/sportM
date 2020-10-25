import {Component, Inject, OnInit} from '@angular/core';
import {BoatCategoryType} from "../../domain/boat-category-type";
import {StructureError} from "../../../utils/structure-error";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MarkAsTouch} from "../../../utils/mark-as-touch";

export class PopupUserType {
  userType: BoatCategoryType;
}
export class ErrorMessages {
  name: StructureError[];
}

@Component({
  selector: 'app-popup-new-user-type',
  templateUrl: './popup-new-user-type.component.html',
  styleUrls: ['./popup-new-user-type.component.css']
})
export class PopupNewUserTypeComponent extends MarkAsTouch implements OnInit{

  public userTypeForm: FormGroup;
  public errorMessages: ErrorMessages;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: PopupUserType,
              public dialogPop: MatDialogRef<PopupNewUserTypeComponent>) {
    super();
  }

  ngOnInit(): void {
    this.userTypeForm = this.fb.group({
      name: new FormControl(this.data.userType.type, [Validators.required]),
    });

    this.errorMessages = {
      name: [
        {type: 'required', message: 'the type of user is required'}
      ]
    };
  }

  close() {
    this.dialogPop.close();
  }

  create() {
    if (this.userTypeForm.valid) {

      const t = this.userTypeForm.value;
      const e = new BoatCategoryType();
      e.id = this.data.userType.id
      e.type = t.name;

      this.dialogPop.close(e);

    } else {
      this.markAsTouched(this.userTypeForm);
    }
  }

}
