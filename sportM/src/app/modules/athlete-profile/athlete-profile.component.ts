import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {StructureError} from '../../../utils/structure-error';
import {Athlete} from "../../domain/athlete";
import {Auth} from "aws-amplify";
import {AthleteProfileService} from "../../services/athlete-profile.service";
import {APIService} from "../../API.service";
import {Sex} from "../../domain/sex";
import {TypeBoat} from "../../domain/type-boat";
import {Side} from "../../domain/side";
import {WeightCategory} from "../../domain/weight-category";

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
  public typeBoat:TypeBoat[];
  public side: Side[];
  public weightCategory: WeightCategory[];
  public athlete = new Athlete();
  public sex: Sex[];
  public boat: any[];


  constructor(private fb: FormBuilder, private service: AthleteProfileService, private api: APIService) {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async user => {
      this.athlete.id = user.attributes.sub ;
      this.athlete.email = user.attributes.email;
      await this.getAthlete(user.attributes.sub);
      await this.getSex();
      await this.getTypeBoat();
      await this.getWeightCategory();
      await this.getPreferedSide();
    })
      .catch(err => console.error(err));
  }

  ngOnInit() {

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
    this.profileForm = this.fb.group({
      // dob: new FormControl('', [Validators.required]),
      // email: new FormControl('', [Validators.required]),
      // weight: new FormControl(''),
      // height: new FormControl('', [Validators.required]),
      // weightCategory: new FormControl('', [Validators.required]),
      // boatPreference: new FormControl('', [Validators.required]),
      // side: new FormControl('', [Validators.required]),
      // sex: new FormControl('', [Validators.required]),
      // rcaNumber: new FormControl('', [Validators.required]),
      // membershipType: new FormControl('', [Validators.required]),
      // firstName: new FormControl('', [Validators.required]),
      // lastName: new FormControl('', [Validators.required]),

      dob: new FormControl(''),
      email: new FormControl(this.athlete.email),
      // weight: new FormControl(this.athlete.weight),
      height: new FormControl(this.athlete.height),
      weightCategory: new FormControl(this.athlete.weightCategory),
      boatPreference: new FormControl(this.athlete.boatPreference),
      side: new FormControl(this.athlete.side),
      sex: new FormControl(this.athlete.sex),
      membershipType: new FormControl(this.athlete.membershipType),
      firstName: new FormControl(this.athlete.firstName),
      lastName: new FormControl(this.athlete.lastName),
    });

  }

  async getAthlete(athleteId: string) {
    // await this.api.GetUser(athleteId).then(user => {
    await this.service.getAthlete(athleteId).then(user => {
      if (user) {
        this.boat = user.boatPreference.items;
        // this.profileForm.get('dob').patchValue(user.dob);
        this.profileForm.get('height').patchValue(user.height);
        this.profileForm.get('weightCategory').patchValue(user.weightCategory.id);
        this.profileForm.get('sex').patchValue(user.sex.id);
        this.profileForm.get('membershipType').patchValue(user.membershipType);
        this.profileForm.get('firstName').patchValue(user.firstName);
        this.profileForm.get('lastName').patchValue(user.lastName);
        // this.profileForm.get('boatPreference').patchValue(user.boatPreference.items);

      }

    });
  };

  async getSex() {
    await this.service.getListSex().then(sex => {
      this.sex = sex.items;

    });
  };

  async getTypeBoat() {
    await this.service.getListTypeBoat().then(type => {
      this.typeBoat = type.items;
      const idBoat = this.boat.map(e => e.id);
      this.profileForm.get('boatPreference').patchValue(this.typeBoat.filter(e => idBoat.indexOf(e.id) !== -1));
      console.log(this.typeBoat.filter(e => idBoat.indexOf(e.id) !== -1));

    });
  };

  async getWeightCategory() {
    await this.service.getListWeightCategory().then(weightCategory => {
      this.weightCategory = weightCategory.items;
    });
  };

  async getPreferedSide() {
    await this.service.getListSide().then(side => {
      this.side = side.items;
      const idSide = side.items.map(e => e.id);
      this.profileForm.get('side').patchValue(this.side.filter(e => idSide.indexOf(e.id) !== -1));
    });
  };


  async create() {
    // if (this.profileForm.valid){
    const profil = this.profileForm.value;

    this.athlete.lastName = profil.lastName;
    this.athlete.membershipType = profil.membershipType;
    this.athlete.email = profil.email;
    // this.athlete.dob = profil.dob;
    // this.athlete.weight = profil.weight;
    this.athlete.height = profil.height;
    this.athlete.weightCategory = profil.weightCategory;
    this.athlete.boatPreference = profil.boatPreference;
    this.athlete.side = profil.side;
    this.athlete.sex = profil.sex;
    this.athlete.status = profil.status;
    this.athlete.membershipType = 3;
    this.athlete.status = true;


    if (this.athlete.firstName != null){
      this.athlete.firstName = profil.firstName;
      await this.service.updateProfil(this.athlete)
    } else {
      this.athlete.firstName = profil.firstName;
      await this.service.save(this.athlete)
    }


    // await this.api.CreateUser(this.athlete);

  }
}



