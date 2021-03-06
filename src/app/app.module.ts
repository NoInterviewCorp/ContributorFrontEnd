import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestComponent } from './test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularModule } from './angular/angular.module';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { TabsComponent } from './landing/tabs/tabs.component';
import { ScrollingContainerComponent } from './scrolling-container/scrolling-container.component';
import { ContributeComponent } from './contribute/contribute.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { contributordashboardComponent } from './contributordashboard/contributordashboard.component';
import { learningplancreatorComponent } from './learningplancreator/learningplancreator.component';
import { resourcecreatorComponent } from './resourcecreator/resourcecreator.component';
import { ResourceformComponent } from './resourceform/resourceform.component';
import { QuestionformComponent } from './questionform/questionform.component';
import { QuestionsComponent } from './questions/questions.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SubscribecardComponent } from './subscribecard/subscribecard.component';
import { YourcontributionscardComponent } from './yourcontributionscard/yourcontributionscard.component';
import { EditlearningplanComponent } from './editlearningplan/editlearningplan.component';
import { learningplanviewerComponent } from './learningplanviewer/learningplanviewer.component';
import { LearnComponent } from './learn/learn.component';
import { LearnerComponent } from './learner/learner.component';
import { SearchComponent } from './learner/search/search.component';
import { YoursubscriptionscardComponent } from './yoursubscriptionscard/yoursubscriptionscard.component';
import { ResourceeditComponent } from './resourceedit/resourceedit.component';
import { SubscriptionviewComponent } from './subscriptionview/subscriptionview.component';
import { TokenInterceptor } from './token-interceptor';
import { RatingComponent } from './rating/rating.component';
import { EdituserprofileComponent } from './edituserprofile/edituserprofile.component';
import { QuestionsviewComponent } from './questionsview/questionsview.component';
import { ResourcesviewComponent } from './resourcesview/resourcesview.component';
import { ResourcecardComponent } from './././resourcesview/resourcecard/resourcecard.component';
import { AssessmentLandingPageComponent } from './assessment-landing-page/assessment-landing-page.component';
import { AddEntityComponentComponent } from './add-entity-component/add-entity-component.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CookieService } from 'ngx-cookie-service';
import { TestedtechnologiesComponent } from './testedtechnologies/testedtechnologies.component';
import { BarComponent } from './testedtechnologies/bar.component';
import { ReportTechCardComponent } from './report-tech-card/report-tech-card.component';
import { ResultsComponent } from './results/results.component';
import { PopularplansComponent } from './popularplans/popularplans.component';
// import { PopularPlanCardComponent } from './popularplans/popular-plan-card/popular-plan-card.component';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("350286072374588")
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("454238831817-sristf7mn9g39ckeemne85df5rm1lg3b.apps.googleusercontent.com")
      }
    ]
  );
  return config;
}
@NgModule({
  declarations: [
    AppComponent,

    // Landing Page Components
    LandingComponent,
    TabsComponent,
    ProfileComponent,
    SignInComponent,
    SignUpComponent,
    NavbarComponent,
    HomeComponent,
    BarComponent,

    // Contributor Page Components
    ContributeComponent,
    contributordashboardComponent,
    learningplancreatorComponent,
    resourcecreatorComponent,
    ResourceformComponent,
    QuestionformComponent,
    QuestionsComponent,
    YourcontributionscardComponent,
    EditlearningplanComponent,
    learningplanviewerComponent,

    // Learner Page Components
    LearnComponent,
    LearnerComponent,
    SearchComponent,
    TestComponent,
    YoursubscriptionscardComponent,
    TestComponent,
    SubscribecardComponent,

    // Commons
    ScrollingContainerComponent,

    ResourceeditComponent,

    SubscriptionviewComponent,

    RatingComponent,

    EdituserprofileComponent,

    QuestionsviewComponent,

    ResourcesviewComponent,

    ResourcecardComponent,

    AssessmentLandingPageComponent,

    AddEntityComponentComponent,

    TestedtechnologiesComponent,

    ReportTechCardComponent,
    ResultsComponent,
    PopularplansComponent
    // PopularPlanCardComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularModule,
    AppRoutingModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    LayoutModule,
    NgMatSearchBarModule,
    FlexLayoutModule,
    NgMatSearchBarModule,
  ],
  entryComponents: [
    SignInComponent
  ],
  providers: [
    AuthGuardService,
    CookieService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
