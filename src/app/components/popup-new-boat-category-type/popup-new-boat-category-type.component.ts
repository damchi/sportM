import {Component, Inject, OnInit} from '@angular/core';
import {StructureError} from "../../../utils/structure-error";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MarkAsTouch} from "../../../utils/mark-as-touch";
import {BoatCategoryType} from "../../domain/boat-category-type";


export class PopupBoatCategoryType {
  boatCategoryType: BoatCategoryType;
}

export class ErrorMessages {
  name: StructureError[];
}

@Component({
  selector: 'app-popup-new-boat-category-type',
  templateUrl: './popup-new-boat-category-type.component.html',
  styleUrls: ['./popup-new-boat-category-type.component.css']
})
export class PopupNewBoatCategoryTypeComponent extends MarkAsTouch implements OnInit {
  public boatCategoryTypeForm: FormGroup;
  public errorMessages: ErrorMessages;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: PopupBoatCategoryType,
              public dialogPop: MatDialogRef<PopupNewBoatCategoryTypeComponent>) {
    super();
  }

  ngOnInit(): void {
    this.boatCategoryTypeForm = this.fb.group({
      name: new FormControl(this.data.boatCategoryType.type, [Validators.required]),
    });

    this.errorMessages = {
      name: [
        {type: 'required', message: 'the type of category is required'}
      ]
    };
  }

  close() {
    this.dialogPop.close();
  }

  create() {
    if (this.boatCategoryTypeForm.valid) {

      const t = this.boatCategoryTypeForm.value;
      const e = new BoatCategoryType();
      e.id = this.data.boatCategoryType.id
      e.type = t.name;

      this.dialogPop.close(e);

    } else {
      this.markAsTouched(this.boatCategoryTypeForm);
    }
  }
}
