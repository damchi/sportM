import {Component, Inject, OnInit} from '@angular/core';
import * as roleJson from "../../config/role.json";
import * as ownerJson from "../../config/ownership.json";
import * as typeJson from "../../config/typeBoat.json";
import * as weightJson from "../../config/weightCategory.json";
import {Membership} from "../../domain/membership";
import {WeightCategory} from "../../domain/weight-category";
import {TypeBoat} from "../../domain/type-boat";
import {Ownership} from "../../domain/ownership";
import {Training} from "../../domain/training";
import {StructureError} from "../../../utils/structure-error";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Boat} from "../../domain/boat";
import moment from "moment";
import {MarkAsTouch} from "../../../utils/mark-as-touch";

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
  public membershipType: Membership[];
  public weightCategory: WeightCategory[];
  public ownership: Ownership[];
  public typeBoat: TypeBoat[];
  public errorMessages: ErrorMessages;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: PopupBoat, public dialogPop: MatDialogRef<PopupNewBoatComponent>) {
    super();
  }

  ngOnInit() {
    this.boatForm = this.fb.group({
      name: new FormControl(this.data.boat.name, [Validators.required]),
      ownership: new FormControl(this.data.boat.ownership, [Validators.required]),
      weightCategory: new FormControl(this.data.boat.weightCategory, [Validators.required]),
      membershipType: new FormControl(this.data.boat.membershipType, [Validators.required]),
      sortOfBoat: new FormControl(this.data.boat.sortOfBoat,[Validators.required]),
      note: new FormControl(this.data.boat.note),
      active: new FormControl(this.data.boat.active,[Validators.required]),
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
    this.membershipType = roleJson.membershipType;
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
      e.membershipType = JSON.stringify({"role": t.membershipType});
      e.weightCategory = t.weightCategory;
      e.sortOfBoat = t.sortOfBoat;
      e.ownership = t.ownership;
      e.active = t.active;

      this.dialogPop.close(e);

    } else {
      this.markAsTouched(this.boatForm);
    }
  }
}
