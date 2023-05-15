import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberCardComponent } from './components/member-card/member-card.component';
import { ReleasesComponent } from './pages/releases/releases.component';
import { ReleaseCardComponent } from './components/release-card/release-card.component';
import { LeftPanelComponent } from './components/left-panel/left-panel.component';
import { MembersComponent } from './pages/members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberCardComponent,
    ReleasesComponent,
    ReleaseCardComponent,
    LeftPanelComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
