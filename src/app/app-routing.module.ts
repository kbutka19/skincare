import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'training', loadChildren: './training/training.module#TrainingModule', canLoad: [AuthGuard] },
  { path: 'quizes', loadChildren: './quizes/quizes.module#QuizesModule', canLoad: [AuthGuard] },
  { path: 'skin-routine', loadChildren: './routine/routine.module#RoutineModule', canLoad: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
