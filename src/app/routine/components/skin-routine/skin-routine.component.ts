import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, finalize, tap } from 'rxjs/operators';
import { SharedService } from '../../../shared/shared.service';
import { RoutineValidator } from '../../../shared/validator/routine.validator';
import { RoutineService } from '../../routine.service';

@Component({
  selector: 'app-skin-routine',
  templateUrl: './skin-routine.component.html',
  styleUrls: ['./skin-routine.component.css']
})
export class SkinRoutineComponent implements OnInit {
  form: FormGroup;
  productType;
  counter = 0;
  isLoading: boolean;
  constructor(private routineService: RoutineService, private sharedService: SharedService, private routineValidator: RoutineValidator,) { }

  ngOnInit() {
    this.productType = [
      {
        key: "Moisturizer",
        value: "Moisturizer"
      },
      {
        key: "Cleanser",
        value: "Cleanser"
      },
      {
        key: "Treatment",
        value: "Treatment"
      },
      {
        key: "Mask",
        value: "Mask"
      },
    ];
    this.form = new FormGroup({
      routineList: new FormArray([], [Validators.required, this.routineValidator.uniqueSteps])
    });
    this.isLoading = true;
    this.getRoutine();
   
  }

  getRoutine() {
    this.routineService.getRoutine().pipe(
      tap(result => {
        if (result) {
          Object.values(result).forEach((r: any) => {
            r.sort((a, b) => a.step - b.step);
            r.forEach(res => {
              (this.form.get('routineList') as FormArray).push(new FormGroup({
                id: new FormControl(undefined),
                step: new FormControl(res.step, Validators.required),
                type: new FormControl(res.type, Validators.required),
                brand: new FormControl(res.brand, [], [this.routineValidator.brandCheck()]),
                application: new FormControl(res.application),
                purchaseDate: new FormControl(res.purchaseDate, [this.routineValidator.lessOrEqualThenCurrent()])
              }));
            });

          });
        }
      }),
      finalize(() => this.isLoading = false),
      catchError((err) => err)
    ).subscribe();
  }

  public addRoutine() {
    this.counter = this.counter + 1;
    (this.form.get('routineList') as FormArray).push(new FormGroup({
      id: new FormControl(this.counter),
      step: new FormControl(undefined, Validators.required),
      type: new FormControl(undefined, Validators.required),
      brand: new FormControl(undefined, [], [this.routineValidator.brandCheck()]),
      application: new FormControl(undefined),
      purchaseDate: new FormControl(undefined, [this.routineValidator.lessOrEqualThenCurrent()])
    }));
 
  }

  get routineList() {
    return this.form.get('routineList') as FormArray;
  }

  deleteAll() {
    while ((this.form.get('routineList') as FormArray).length !== 0) {
      (this.form.get('routineList') as FormArray).removeAt(0);
    }
  }
  remove(index) {
    (this.form.get('routineList') as FormArray).removeAt(index);
  }

  saveRoutine() {
    this.isLoading = true;
    this.routineService.deleteRoutine().pipe(tap(() => {
      this.routineService.saveRoutine(this.form.get('routineList').value).pipe(
        tap(() => {
          this.deleteAll();
          this.getRoutine();
        }),
        catchError((err) => err)
      ).subscribe();
    }),
    ).subscribe();
  }

}
