import {Component, OnInit} from '@angular/core';
import {AmplifyService} from "aws-amplify-angular";
import {Router} from "@angular/router";
import {Auth} from "aws-amplify";
import {User} from "../../domain/user";
import moment from "moment";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  public user = new User();

  constructor(public amplifyService: AmplifyService, public router: Router, private serviceUser: UserService) {
    this.amplifyService = amplifyService;
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        if (authState.state === 'signedIn') {
          Auth.currentAuthenticatedUser({
            bypassCache: false
          }).then(async user => {
            await this.getUser(user.attributes.sub);
            console.log(this.user);
            if (this.user.membershipType == 'competitive' || this.user.membershipType == 'master' ||
              this.user.membershipType == 'recreative') {
              await this.router.navigate(['/athlete']);
            } else if (this.user.membershipType == 'admin' || this.user.membershipType == 'coach') {
              await this.router.navigate(['/coach']);
            }
          })
            .catch(err => console.error(err));
        }
      });
  }

  ngOnInit() {
  }

  async getUser(userId: string) {
    await this.serviceUser.getUser(userId).then(user => {
      if (user) {
        return this.user = user;
      }
    });
  };

}
