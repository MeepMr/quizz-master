import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizOverviewComponent } from './components/view/quiz-overview/quiz-overview.component';
import { NavbarComponent } from './components/view/navbar/navbar.component';
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';
import { QuizBoardComponent } from './components/quiz-board/quiz-board.component';
import { QuizBoardColumnComponent } from './components/quiz-board/quiz-board-column/quiz-board-column.component';
import { QuizBoardQuestionComponent } from './components/quiz-board/quiz-board-question/quiz-board-question.component';
import { QuizQuestionComponent } from './components/quiz-question/quiz-question.component';
import { QuizDetailComponent } from './components/view/quiz-detail/quiz-detail.component';
import { QuizQuestionDetailComponent } from './components/view/quiz-question-detail/quiz-question-detail.component';
import { ShowMultipleChoiceQuestionComponent } from './components/quiz-question/show-multiple-choice-question/show-multiple-choice-question.component';
import { ShowActionQuestionComponent } from './components/quiz-question/show-action-question/show-action-question.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizOverviewComponent,
    NavbarComponent,
    QuizCardComponent,
    QuizBoardComponent,
    QuizBoardColumnComponent,
    QuizBoardQuestionComponent,
    QuizQuestionComponent,
    QuizDetailComponent,
    QuizQuestionDetailComponent,
    ShowMultipleChoiceQuestionComponent,
    ShowActionQuestionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
