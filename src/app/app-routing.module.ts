import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WhoAreWe2Component} from "./who-are-we2/who-are-we2.component";
import {WhoAreWe1Component} from "./who-are-we1/who-are-we1.component";

const routes: Routes = [
  { path: 'whoAreWe1', component:WhoAreWe1Component},
  { path: 'whoAreWe2', component:WhoAreWe2Component},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
