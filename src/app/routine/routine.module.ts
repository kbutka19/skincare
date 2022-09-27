import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkinRoutineComponent } from './components/skin-routine/skin-routine.component';
import { RoutineRoutingModule } from './routine-routing.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RoutineService } from './routine.service';
import { SharedService } from '../shared/shared.service';
import { NumbersOnlyDirective } from '../shared/directive/numbersOnly.directive';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RoutineRoutingModule
  ],
  declarations: [SkinRoutineComponent],
  providers: [RoutineService, SharedService]
})
export class RoutineModule { }
