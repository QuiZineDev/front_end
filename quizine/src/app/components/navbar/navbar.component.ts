import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppStore } from '../../stores/app.store';
import { Quiz } from '../../models/quizModel';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  quizList: Quiz[] = [];
  filteredQuizList: Quiz[] = [];
  searchTerm: string = '';
  
  constructor(private router: Router, private appStore: AppStore, private sidebarService: SidebarService) {
      this.appStore.init()
      this.appStore.quizList.subscribe((quizzes) => {
        this.quizList = quizzes||[];
        this.filteredQuizList = quizzes||[];
      });
  }

  onSearchChange(event: Event) {
    const target = event.target as HTMLInputElement | null;
    const term = target ? target.value : '';
    this.searchTerm = term;
    const lower = term.toLowerCase();
    this.filteredQuizList = this.quizList.filter(q =>
      q.nom.toLowerCase().includes(lower)
    );
  }

  toggleSideBar() {
    this.sidebarService.toggle();
  }

  gotoCreateQuiz() {
    this.router.navigate(['/create']);
  }

  gotoProfile() {
    this.router.navigate(['/profile']);
  }

  gotoQuiz(quizId: number) {
    this.router.navigate(['quiz-preview/'+quizId]);
  }
}
