import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from 'ngx-toastr';
import {CommonModule} from "@angular/common";
import {AuthComponent} from './components/auth/auth.component';
import { AmplifyService} from "aws-amplify-angular";
import {ConfirmDialogComponent} from './components/confirm-dialog/confirm-dialog.component';
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import awsconfig from '../aws-exports';
import {Amplify} from "aws-amplify";
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    AmplifyUIAngularModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MatDialogModule,
    MatSnackBarModule,
    NgxMaterialTimepickerModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
