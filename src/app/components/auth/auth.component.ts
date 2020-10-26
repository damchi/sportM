import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AmplifyService} from "aws-amplify-angular";
import {Router} from "@angular/router";
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  title = 'amplify-angular-auth';
  user: CognitoUserInterface | undefined;
  authState: AuthState;

  constructor(private ref: ChangeDetectorRef, public router: Router) {}

  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
      if (authState === AuthState.SignedIn) {
        console.log('user successfully signed in!');
        console.log('user data: ', authData);
        return this.router.navigate(['/athlete'])
      }
      if (!authData) {
        console.log('user is not signed in...');
      }
    })
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }

  // constructor(public amplifyService: AmplifyService, public router: Router) {
  //   this.amplifyService = amplifyService;
  //   this.amplifyService.authStateChange$
  //     .subscribe(authState => {
  //       if (authState.state === 'signedIn') {
  //         this.router.navigate(['/athlete']);
  //       }
  //     });
  // }
  //
  //
  // ngOnInit() {
  // }

}
