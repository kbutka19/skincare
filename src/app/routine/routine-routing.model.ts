import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkinRoutineComponent } from './components/skin-routine/skin-routine.component';

const routes: Routes = [
    { path: '', component: SkinRoutineComponent }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class RoutineRoutingModule {}