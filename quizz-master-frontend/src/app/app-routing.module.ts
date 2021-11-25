import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuizOverviewComponent} from './components/view/quiz-overview/quiz-overview.component';
import {QuizBoardComponent} from './components/quiz-board/quiz-board.component';
import {QuizQuestionComponent} from './components/quiz-board/view/quiz-question/quiz-question.component';

const routes: Routes = [
  {path: 'quiz/:quiz_id', component: QuizBoardComponent},
  {path: 'question/:question_id', component: QuizQuestionComponent},
  {path: 'landingpage', component: QuizOverviewComponent},
  {path: '**', redirectTo: 'landingpage'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
