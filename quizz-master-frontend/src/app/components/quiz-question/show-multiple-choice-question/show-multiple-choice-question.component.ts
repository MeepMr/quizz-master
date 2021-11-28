import {Component, Input, OnInit} from '@angular/core';
import {MultipleChoiceQuestion} from "../../../shared/model/question/multiple-choice-question";

@Component({
  selector: 'app-show-multiple-choice-question',
  templateUrl: './show-multiple-choice-question.component.html',
  styleUrls: ['./show-multiple-choice-question.component.scss']
})
export class ShowMultipleChoiceQuestionComponent implements OnInit {

  @Input() activeMultipleChoiceQuestion: MultipleChoiceQuestion = new MultipleChoiceQuestion(-1, '', -1, [])

  ngOnInit(): void { }

}
