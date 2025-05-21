import { Routes } from '@angular/router';
import { ExploreComponent } from './components/explore/explore.component';
import { QuizDescriptionComponent } from './components/quiz-description/quiz-description.component';
import { LibraryComponent } from './components/library/library.component';
import { EditQuizComponent } from './components/edit-quiz/edit-quiz.component';
import { WaitingPageComponent } from './components/waiting-page/waiting-page.component';
import { UserInviteComponent } from './components/user-invite/user-invite.component';

export const routes: Routes = [
    {path: "explore", component: ExploreComponent},
    {path: "quiz-preview/:id", component: QuizDescriptionComponent},
    {path: "library", component: LibraryComponent},
    {path: "edit-quiz/:id", component: EditQuizComponent},
    { path: 'waiting', component: WaitingPageComponent },
    { path: 'invite', component: UserInviteComponent }
];