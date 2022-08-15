import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { OurVisionComponent } from './components/our-vision/our-vision.component';
import { ServicesComponent } from './components/services/services.component';
import { LazyLoadScriptService } from './shared/services/lazy-load.service';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { AcademyInfoComponent } from './components/academy-info/academy-info.component';
import { NewsComponent } from './components/news/news.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    OurVisionComponent,
    ServicesComponent,
    OurTeamComponent,
    WhyUsComponent,
    AcademyInfoComponent,
    NewsComponent,
    SponsorsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LazyLoadScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
