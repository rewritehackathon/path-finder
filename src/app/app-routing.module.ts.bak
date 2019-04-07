import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { ClaimsComponent } from './claims/claims.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { RatingsComponent } from './ratings/ratings.component';
import { SmartclaimComponent } from './smartclaim/smartclaim.component';
import { ManualclaimComponent } from './manualclaim/manualclaim.component';

const routes: Routes = [
  {   path: 'home', component: HomeComponent  },
    {   path: 'user',component: UserComponent  },
    {   path: 'vehicle',component: VehicleComponent  },
    {   path: 'insurance',component: InsuranceComponent  },
    {   path: 'claims',component: ClaimsComponent ,
   children :[
         {   path: 'smartclaim', component: SmartclaimComponent },
         {   path: 'maunalclaim',  component:ManualclaimComponent },
        // {   path: 'createuser', component: PostuserComponent},
        // {   path: 'getuser', component: GetuserComponent},
        // {   path: 'enabledisableuser', component: PutuserComponent},
        // {   path: 'deleteuser', component: DeleteuserComponent}
         ]
       },
    {   path: 'analytics',component: AnalyticsComponent  },
    {   path: 'ratings', component:RatingsComponent    },
    {   path: '',  redirectTo: 'home',  pathMatch: 'full'  },
    {   path: '**', redirectTo: 'home', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
