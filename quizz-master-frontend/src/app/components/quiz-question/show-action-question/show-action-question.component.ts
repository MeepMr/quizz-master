import {Component, Input, OnInit} from '@angular/core';
import {ActionQuestion} from "../../../shared/model/question/action-question";

@Component({
  selector: 'app-show-action-question',
  templateUrl: './show-action-question.component.html',
  styleUrls: ['./show-action-question.component.scss']
})
export class ShowActionQuestionComponent implements OnInit {

  @Input() activeActionQuestion: ActionQuestion = new ActionQuestion(-1, '', -1, -1)

  ngOnInit(): void { }
}
