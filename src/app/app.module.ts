import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule }from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanService } from './service/loan.service';
import { UserService } from './service/user.service';
import { LoanComponent } from './loan/loan.component';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material/material-module';

@NgModule({
  declarations: [
    AppComponent,
    LoanComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [UserService, LoanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
