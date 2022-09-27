import { Pipe, PipeTransform } from '@angular/core';
import { SharedService } from '../shared.service';

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
   
    transform(value: string, length: number) {
        if (value && value.length > length) {
            return value.substring(0, length) + '...';
        } else {
            return value;
        }
    }
}
