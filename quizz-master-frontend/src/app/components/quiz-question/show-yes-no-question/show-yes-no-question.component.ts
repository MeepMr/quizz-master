import {Component, Input, OnInit} from '@angular/core';
import {YesNoQuestion} from "../../../shared/model/question/yes-no-question";

@Component({
  selector: 'app-show-yes-no-question',
  templateUrl: './show-yes-no-question.component.html',
  styleUrls: ['./show-yes-no-question.component.scss']
})
export class ShowYesNoQuestionComponent implements OnInit {

  @Input() activeYesNoQuestion?: YesNoQuestion;

  constructor() { }

  ngOnInit(): void {
  }

}
