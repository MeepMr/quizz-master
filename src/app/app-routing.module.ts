import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuizzOverviewComponent} from "./components/view/quizz-overview/quizz-overview.component";

const routes: Routes = [
  {path: '', component: QuizzOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
