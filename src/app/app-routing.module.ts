import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from "./pages/members/members.component";
import { ReleasesComponent } from "./pages/releases/releases.component";

const routes: Routes = [
  { path: "members", component: MembersComponent },
  { path: "releases", component: ReleasesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
