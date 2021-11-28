import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuizOverviewComponent} from './components/view/quiz-overview/quiz-overview.component';
import {QuizDetailComponent} from "./components/view/quiz-detail/quiz-detail.component";
import {QuizQuestionDetailComponent} from "./components/view/quiz-question-detail/quiz-question-detail.component";

const routes: Routes = [
  {path: 'quiz/:quiz_id', component: QuizDetailComponent},
  {path: 'question/:question_id', component: QuizQuestionDetailComponent},
  {path: 'landingpage', component: QuizOverviewComponent},
  {path: '**', redirectTo: 'landingpage'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
