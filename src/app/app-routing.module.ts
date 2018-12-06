import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { contributordashboardComponent } from './contributordashboard/contributordashboard.component';
import { QuestionsComponent } from './questions/questions.component';
import { resourcecreatorComponent } from './resourcecreator/resourcecreator.component';
import { learningplancreatorComponent } from './learningplancreator/learningplancreator.component';
import { AppComponent } from './app.component';
import { EditlearningplanComponent } from './editlearningplan/editlearningplan.component';
import { learningplanviewerComponent } from './learningplanviewer/learningplanviewer.component';
import { LearnerComponent } from './learner/learner.component';
import { SubscriptionviewComponent } from './subscriptionview/subscriptionview.component';
import { EdituserprofileComponent } from './edituserprofile/edituserprofile.component';
import { AssessmentLandingPageComponent } from './assessment-landing-page/assessment-landing-page.component';

const routes: Routes = [
  //{path: 'home',component: HomeComponent},
  { path: '', component: ProfileComponent },
  {path:'edituserprofile', component:EdituserprofileComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'contribute', component: contributordashboardComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'resourcecreator', component: resourcecreatorComponent },
  { path: 'learningplancreator', component: learningplancreatorComponent },
  { path: 'test/:domain', component: TestComponent },
  { path: 'home' , component: AppComponent},
  // {path: 'profilepage',component: ProfileComponent},
  {path: 'learningplanedit', component: EditlearningplanComponent},
  {path: 'learningplanviewer', component: learningplanviewerComponent},
  // { path: 'userprofile',component: ProfileComponent},
  // { path: 'editlearningplan', component: EditlearningplanComponent},
  { path: 'test', component: TestComponent },
  { path: 'learner', component: LearnerComponent },
  { path: 'login', component: SignInComponent },
  { path: 'subscriptionview', component: SubscriptionviewComponent },
  { path: 'assessment', component: AssessmentLandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
