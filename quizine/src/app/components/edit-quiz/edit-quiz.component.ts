import { Component, Input } from '@angular/core';
import { Quiz } from '../../models/quizModel';
import { TagListComponent } from '../tag-list/tag-list.component';
import { EditQuizQuestionComponent } from "./edit-quiz-question/edit-quiz-question.component";
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-edit-quiz',
  standalone: true,
  imports: [TagListComponent, EditQuizQuestionComponent, ButtonComponent, CommonModule],
  templateUrl: './edit-quiz.component.html',
  styleUrl: './edit-quiz.component.css'
})
export class EditQuizComponent {
  quiz!: Quiz;
  
    constructor(private route: ActivatedRoute, private quizService: QuizService) {}
  
    ngOnInit(): void {
      let quizId = Number(this.route.snapshot.paramMap.get('id'));
      if (quizId) {
        this.quizService.getQuizById(quizId).then((data: Quiz) => {
          this.quiz = data;
        });
      }
    }
}
