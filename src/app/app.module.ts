import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { ChooseUsComponent } from './choose-us/choose-us.component';
import { SolutionComponent } from './solution/solution.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';
import { TeamComponent } from './team/team.component';
import { PricingComponent } from './pricing/pricing.component';
import { WhoAreWe1Component } from './who-are-we1/who-are-we1.component';
import { WhoAreWe2Component } from './who-are-we2/who-are-we2.component';
import { FullComponent } from './full/full.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    ServicesComponent,
    ChooseUsComponent,
    SolutionComponent,
    CaseStudiesComponent,
    WhoAreWeComponent,
    TeamComponent,
    PricingComponent,
    WhoAreWe1Component,
    WhoAreWe2Component,
    FullComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
