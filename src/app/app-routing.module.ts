import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuizOverviewComponent} from "./components/view/quiz-overview/quiz-overview.component";
import {QuizViewComponent} from "./components/view/quiz-view/quiz-view.component";

const routes: Routes = [
  {path: 'quiz/:quiz-id', component: QuizViewComponent},
  {path: 'landingpage', component: QuizOverviewComponent},
  {path: '**', redirectTo: 'landingpage'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
