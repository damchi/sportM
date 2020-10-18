import {Component, Inject, OnInit} from '@angular/core';
import {Boat} from "../../domain/boat";
import {StructureError} from 'src/utils/structure-error';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MarkAsTouch} from "../../../utils/mark-as-touch";
import {WeightCategory} from "../../domain/weight-category";
import {TypeBoat} from "../../domain/type-boat";
import {UserType} from "../../domain/user-type";
import {Ownership} from "../../domain/ownership";
import * as ownerJson from "../../config/ownership.json";
import * as typeJson from "../../config/typeBoat.json";
import * as weightJson from "../../config/weightCategory.json";
import {MembershipTypeService} from "../../services/membership-type.service";

export class PopupBoat {
  boat: Boat;
}

export class ErrorMessages {
  name: StructureError[];
  ownership: StructureError[];
  weightCategory: StructureError[];
  membershipType: StructureError[];
  sortOfBoat: StructureError[];
  active: StructureError[];
}

@Component({
  selector: 'app-popup-new-boat',
  templateUrl: './popup-new-boat.component.html',
  styleUrls: ['./popup-new-boat.component.css']
})
export class PopupNewBoatComponent extends MarkAsTouch implements OnInit {
  public boatForm: FormGroup;
  public userTypes: UserType[] = [];
  public weightCategory: WeightCategory[];
  public ownership: Ownership[];
  public typeBoat: TypeBoat[];
  public errorMessages: ErrorMessages;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: PopupBoat,
              public dialogPop: MatDialogRef<PopupNewBoatComponent>, private serviceUserType: MembershipTypeService) {
    super();
  }

  ngOnInit() {
    console.log(this.data.boat)
    this.boatForm = this.fb.group({
      name: new FormControl(this.data.boat.name, [Validators.required]),
      ownership: new FormControl(this.data.boat.ownership, [Validators.required]),
      weightCategory: new FormControl(this.data.boat.weightCategory, [Validators.required]),
      membershipType: new FormControl(this.data.boat.membershipType.items, [Validators.required]),
      sortOfBoat: new FormControl(this.data.boat.sortOfBoat, [Validators.required]),
      note: new FormControl(this.data.boat.note),
      active: new FormControl(this.data.boat.active, [Validators.required]),
    });

    this.errorMessages = {
      name: [
        {type: 'required', message: 'the boat\'s name is required'}
      ],
      ownership: [
        {type: 'required', message: 'the ownership  is required'}
      ],
      membershipType: [
        {type: 'required', message: 'The membership category is required'}
      ],
      weightCategory: [
        {type: 'required', message: 'The wieght category  are required'}
      ],
      sortOfBoat: [
        {type: 'required', message: 'the type of boat is required'}
      ],
      active: [
        {type: 'required', message: 'the boat\'s status is required'}
      ]
    };
    this.getOwnership();
    this.getRole();
    this.getWeightCategory();
    this.getTypeOfBoat();
  }

  getOwnership() {
    this.ownership = ownerJson.ownership;
  }

  getRole() {
    this.serviceUserType.getUserType().then((type) => {
      for (let i = 0; i < type.items.length; i++) {
        this.userTypes[i] = {
          id: type.items[i].id,
          type: type.items[i].type,
        };
      }
    });
  }

  getTypeOfBoat() {
    this.typeBoat = typeJson.typeBoat;
  }

  getWeightCategory() {
    this.weightCategory = weightJson.weightCategory;
  }

  close() {
    this.dialogPop.close();
  }

  create() {
    if (this.boatForm.valid) {
      const t = this.boatForm.value;
      const e = new Boat();
      e.id = this.data.boat.id
      e.name = t.name;
      e.membershipType = t.membershipType;
      // e.membershipType = JSON.stringify({"role": t.membershipType});
      e.weightCategory = t.weightCategory;
      e.sortOfBoat = t.sortOfBoat;
      e.ownership = t.ownership;
      e.active = t.active;
      e.note = t.note;

      this.dialogPop.close(e);

    } else {
      this.markAsTouched(this.boatForm);
    }
  }

}
