import { Injectable } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';
import { SharedService } from '../shared.service';
import * as moment from 'moment';

@Injectable()
export class RoutineValidator {
    constructor(private sharedService: SharedService) { }
    public uniqueSteps(arr: FormArray) {
        const duplicates = arr.value.filter((item, index) => arr.value.findIndex(i => i.step == item.step) !== index);
        return duplicates && duplicates.length ? {
            hasDuplicateSteps: true
        } : null;

    }

    brandCheck() {
        return (control: AbstractControl) => {
            if (control.value) {
                return this.sharedService.getBrands()
                    .pipe(
                        map((brands) => {
                            return brands.find(b => b.toUpperCase() === control.value.toUpperCase())
                                ? null
                                : { brandNotFound: 'Please enter a known cosmetic brand' };
                        }
                        )
                    );
            } else {
                return of(null);
            }
        };
    }

    lessOrEqualThenCurrent() {
        return (control: AbstractControl) => {
            if (!control || !control.value) {
                return;
            }
            const controlDate = moment(control.value);
            const today = moment(new Date());
            return controlDate.isAfter(today) ?
                { 'dateIsAfter': 'Purchase date must be before today' } :
                null;
        };

    }

}



