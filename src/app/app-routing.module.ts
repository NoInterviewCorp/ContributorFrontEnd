import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { ContibutorhomeComponent } from './contibutorhome/contibutorhome.component';
import { QuestionsComponent } from './questions/questions.component';
import { AddresourceComponent } from './addresource/addresource.component';
import { AddlearningplanComponent } from './addlearningplan/addlearningplan.component';
import { AppComponent } from './app.component';
import { SearchComponent } from './learner/search/search.component';
import { EditlearningplanComponent } from './editlearningplan/editlearningplan.component';
import { LearningplanviewComponent } from './learningplanview/learningplanview.component';
import { LearnerComponent } from './learner/learner.component';
import { SubscriptionviewComponent } from './scrolling-container/yoursubscriptionscard/subscriptionview/subscriptionview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: LandingComponent },
  { path: 'profile/:id', component: SearchComponent },
  { path: 'contribute', component: ContibutorhomeComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'addresource', component: AddresourceComponent },
  { path: 'addlearningplan', component: AddlearningplanComponent },
  { path: 'test', component: TestComponent },
  { path: 'home' , component: AppComponent},
  { path: 'profilepage',component: ProfileComponent},
  { path: 'editlearningplan', component: EditlearningplanComponent},
  { path: 'learningplanview', component: LearningplanviewComponent},
  { path: 'profilepage',component: ProfileComponent},
  { path: 'editlearningplan', component: EditlearningplanComponent},
  { path: 'test', component: TestComponent },
  { path: 'learner', component: LearnerComponent },
  { path: 'login', component: SignInComponent },
  { path: 'subscriptionview', component: SubscriptionviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
