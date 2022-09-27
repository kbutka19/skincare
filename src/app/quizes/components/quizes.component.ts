import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SharedService } from '../../shared/shared.service';
import { TrainingService } from '../../training/training.service';


@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.css']
})
export class QuizesComponent implements OnInit, OnDestroy {

  ngOnInit() {

  }

  ngOnDestroy() {
  
  }
}
