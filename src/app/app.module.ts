import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizOverviewComponent } from './components/view/quiz-overview/quiz-overview.component';
import { NavbarComponent } from './components/view/navbar/navbar.component';
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';
import { QuizViewComponent } from './components/view/quiz-view/quiz-view.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizOverviewComponent,
    NavbarComponent,
    QuizCardComponent,
    QuizViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
