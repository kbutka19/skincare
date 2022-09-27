import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { DataNotImplementedDirective } from './directive/dataNotImplemented.directive';
import { HoverCardDirective } from './directive/hoverCard.directive';
import { NumbersOnlyDirective } from './directive/numbersOnly.directive';
import { ConvertCurrencyPipe } from './pipe/price.pipe';
import { SortByPipe } from './pipe/sortBy.pipe';
import { TruncatePipe } from './pipe/truncate.pipe';
import { SharedService } from './shared.service';
import { RoutineValidator } from './validator/routine.validator';

@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    NumbersOnlyDirective,
    TruncatePipe,
    ConvertCurrencyPipe,
    SortByPipe,
    HoverCardDirective,
    DataNotImplementedDirective
  ],
  providers: [RoutineValidator, SharedService],
  declarations: [DialogComponent,
     NumbersOnlyDirective,
     TruncatePipe,
     ConvertCurrencyPipe,
     SortByPipe,
     HoverCardDirective,
     DataNotImplementedDirective]
})
export class SharedModule { }
