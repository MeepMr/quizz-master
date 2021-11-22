import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzOverviewComponent } from './components/view/quizz-overview/quizz-overview.component';
import { NavbarComponent } from './components/view/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizzOverviewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
