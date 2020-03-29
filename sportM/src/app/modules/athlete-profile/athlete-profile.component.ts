import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StructureError} from '../../../utils/structure-error';

export class ErrorMessages {
  dob: StructureError[];
  email: StructureError[];
  height: StructureError[];
  weightCategory: StructureError[];
  boatPreference: StructureError[];
  side: StructureError[];
  sex: StructureError[];
  firstName: StructureError[];
  lastName: StructureError[];
}


@Component({
  selector: 'app-athlete-profile',
  templateUrl: './athlete-profile.component.html',
  styleUrls: ['./athlete-profile.component.css']
})

export class AthleteProfileComponent implements OnInit {

  public profileForm: FormGroup;
  public errorMessages: ErrorMessages;
  public boats: [{id: 1, name: 'single'}];
  public sides: [{id: 1, name: 'port'}];
  public sex: [{id: 1, name: 'M'}];


  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.profileForm = this.fb.group({
      dob: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      weight: new FormControl(''),
      height: new FormControl('', [Validators.required]),
      weightCategory: new FormControl('', [Validators.required]),
      boatPreference: new FormControl('', [Validators.required]),
      side: new FormControl('', [Validators.required]),
      sex: new FormControl('', [Validators.required]),
      rcaNumber: new FormControl('', [Validators.required]),
      membershipType: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
    });
    this.errorMessages = {
      dob: [
        {type: 'required', message: 'The date of birth is required.'}
      ],
      email: [
        {type: 'required', message: 'The email is required.'}
      ],
      height: [
        {type: 'required', message: 'The height is required.'}
      ],
      weightCategory: [
        {type: 'required', message: 'The weight category is required.'}
      ],
      boatPreference: [
        {type: 'required', message: 'The boat preference is required.'}
      ],
      side: [
        {type: 'required', message: 'The side preference is required.'}
      ],
      sex: [
        {type: 'required', message: 'The sex is required.'}
      ],
      firstName: [
        {type: 'required', message: 'The firstname is required.'}
      ],
      lastName: [
        {type: 'required', message: 'The lastname is required.'}
      ]
    };
  }

  create() {

  }
}



