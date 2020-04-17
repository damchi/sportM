import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StructureError} from '../../../utils/structure-error';
import {Athlete} from "../../domain/athlete";
import {Auth, Hub} from "aws-amplify";
import {AthleteService} from "../../services/athlete.service";
import {APIService} from "../../API.service";
import {Sex} from "../../domain/sex";
import {TypeBoat} from "../../domain/type-boat";
import {Side} from "../../domain/side";
import {WeightCategory} from "../../domain/weight-category";
import * as sexJson from "../../config/sex.json";
import * as typeBoatJson from "../../config/typeBoat.json";
import * as weightCategoryJson from "../../config/weightCategory.json";
import * as sideJson from "../../config/side.json";
import {MarkAsTouch} from "../../../utils/mark-as-touch";
import moment from 'moment';
import {UsernameAttributes} from "aws-amplify-angular/dist/src/components/authenticator/types";
import {UserService} from "../../services/user.service";
import {User} from "../../domain/user";
import {AuthComponent} from "../../components/auth/auth.component";


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

export class AthleteProfileComponent extends MarkAsTouch implements OnInit {

  public profileForm: FormGroup;
  public errorMessages: ErrorMessages;
  public typeBoat: TypeBoat[];
  public side: Side[];
  public weightCategory: WeightCategory[];
  public athlete = new Athlete();
  public sex: Sex[];
  public boat: any[];


  constructor(private fb: FormBuilder, private service: AthleteService, private api: APIService) {
    super();
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async user => {
      this.athlete.id = user.attributes.sub;
      this.athlete.email = user.attributes.email;
      await this.getAthlete(user.attributes.sub);
    })
      .catch(err => console.error(err));
  }

  ngOnInit() {


    this.getSex();
    this.getTypeBoat();
    this.getWeightCategory();
    this.getPreferedSide();

    this.profileForm = this.fb.group({
      dob: new FormControl('', [Validators.required]),
      email: new FormControl(this.athlete.email, [Validators.required]),
      height: new FormControl(this.athlete.height, [Validators.required]),
      weightCategory: new FormControl(this.athlete.weightCategory, [Validators.required]),
      boatPreference: new FormControl(this.athlete.boatPreference, [Validators.required]),
      side: new FormControl(this.athlete.side, [Validators.required]),
      sex: new FormControl(this.athlete.sex, [Validators.required]),
      firstName: new FormControl(this.athlete.firstName, [Validators.required]),
      lastName: new FormControl(this.athlete.lastName, [Validators.required]),
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

  async getAthlete(athleteId: string) {
    await this.service.getAthlete(athleteId).then(user => {
      if (user) {
        this.athlete = user;
        this.profileForm.get('height').patchValue(user.height);
        this.profileForm.get('weightCategory').patchValue(user.weightCategory);
        this.profileForm.get('sex').patchValue(user.sex);
        this.profileForm.get('firstName').patchValue(user.firstName);
        this.profileForm.get('lastName').patchValue(user.lastName);

        this.profileForm.get('dob').patchValue(moment(user.dob).toISOString());
        this.athlete.boatPreference = JSON.parse(user.boatPreference);
        this.athlete.side = JSON.parse(user.side);

        this.getTypeBoat();
        this.getPreferedSide();
      }
    });
  };

  getSex() {
    this.sex = sexJson.sex;
  };

  getTypeBoat() {
    this.typeBoat = typeBoatJson.typeBoat;
    if (this.athlete.boatPreference) {
      const idTypeBoat = this.athlete.boatPreference.boatPreference.map(e => e.id);
      this.profileForm.get('boatPreference').patchValue(this.typeBoat.filter(e => idTypeBoat.indexOf(e.id) !== -1));
    }
  };

  getWeightCategory() {
    this.weightCategory = weightCategoryJson.weightCategory;
  };

  getPreferedSide() {
    this.side = sideJson.side;
    if (this.athlete.side) {
      const idSide = this.athlete.side.side.map(e => e.id);
      this.profileForm.get('side').patchValue(this.side.filter(e => idSide.indexOf(e.id) !== -1));
    }
  };


  async create() {
    if (this.profileForm.valid) {
      const profil = this.profileForm.value;

      this.athlete.lastName = profil.lastName;
      this.athlete.email = profil.email;
      this.athlete.dob = moment(profil.dob, 'MM/DD/YYYY').format('YYYY-MM-DD');
      this.athlete.height = profil.height;
      this.athlete.weightCategory = profil.weightCategory;
      this.athlete.boatPreference = JSON.stringify({"boatPreference": profil.boatPreference});
      console.log(this.athlete.dob);
      this.athlete.side = JSON.stringify({"side": profil.side});
      this.athlete.sex = profil.sex;
      this.athlete.status = profil.status;
      this.athlete.membershipType = 'master';
      this.athlete.status = true;


      if (this.athlete.firstName != null) {
        this.athlete.firstName = profil.firstName;
        await this.service.updateProfil(this.athlete)
      } else {
        this.athlete.firstName = profil.firstName;
        await this.service.save(this.athlete)
      }
    } else {
      this.markAsTouched(this.profileForm);
    }
  }
}



