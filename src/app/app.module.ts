import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MenubarComponent } from './menubar/menubar.component';
import { HeaderComponent } from './header/header.component';
import { AppcompsComponent } from './appcomps/appcomps.component';
import { UserComponent } from './user/user.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { ClaimsComponent } from './claims/claims.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { RatingsComponent } from './ratings/ratings.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SmartclaimComponent } from './smartclaim/smartclaim.component';
import { ManualclaimComponent } from './manualclaim/manualclaim.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MenubarComponent,
    HeaderComponent,
    AppcompsComponent,
    UserComponent,
    VehicleComponent,
    InsuranceComponent,
    ClaimsComponent,
    AnalyticsComponent,
    RatingsComponent,
    SmartclaimComponent,
    ManualclaimComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
