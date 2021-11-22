import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuizOverviewComponent} from "./components/view/quiz-overview/quiz-overview.component";

const routes: Routes = [
  {path: '', component: QuizOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
