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
import { AuthGuardService } from './services/auth-guard.service';
import { TestedtechnologiesComponent } from './testedtechnologies/testedtechnologies.component';
import { BarComponent } from './testedtechnologies/bar.component';
import { PopularplansComponent } from './popularplans/popularplans.component';
import { ResultsComponent } from './results/results.component';
const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'edituserprofile', component: EdituserprofileComponent },
  { path: 'profile', component: ProfileComponent },
  // TODO: COPY ', canActivate: [AuthGuardService]' TO EVERY ROUTE WHICH SHOULD BE PROTECTED!!!!
  { path: 'contribute', component: contributordashboardComponent, canActivate: [AuthGuardService] },
  { path: 'questions', component: QuestionsComponent },
  { path: 'resourcecreator', component: resourcecreatorComponent },
  { path: 'learningplancreator', component: learningplancreatorComponent },
  { path: 'test/:domain', component: TestComponent },
  { path: 'home', component: AppComponent },
  { path: 'reportcard/:technology', component: BarComponent },
  // { path:'quizresults/:technology',component:}
  { path: 'learningplanviewer', component: learningplanviewerComponent },
  { path: 'home', component: AppComponent },
  { path: 'learningplanedit/:plan', component: EditlearningplanComponent },
  { path: 'learningplanview/:plan', component: learningplanviewerComponent },
  { path: 'test', component: TestComponent },
  { path: 'learner', component: LearnerComponent },
  { path: 'login', component: SignInComponent },
  { path: 'subscriptionview', component: SubscriptionviewComponent },
  { path: 'assessment', component: AssessmentLandingPageComponent },
  { path: 'testedtechnologies', component: TestedtechnologiesComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'popular', component: PopularplansComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
