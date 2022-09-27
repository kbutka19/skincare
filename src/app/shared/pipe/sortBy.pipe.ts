import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortBy',
    pure: false
})

export class SortByPipe implements PipeTransform {

    transform(value: Array<any>, order: string, column: string) {
        if (!value || !order || !column) {
            return value;
        }
        if (value.length <= 1) {
            return value;
        }
        if (typeof (value[0][column]) === 'number') {
            return value.sort((a, b) => order === 'asc' ? a[column] - b[column] : b[column] - a[column]);
        } else {
            return value.sort((a, b) => order === 'asc' ? a[column].localeCompare(b[column]) : b[column].localeCompare(a[column]));
        }
    }
}
