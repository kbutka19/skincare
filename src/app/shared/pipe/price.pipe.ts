import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertCurrency'
})
export class ConvertCurrencyPipe implements PipeTransform {
    transform(value: any, currency: string) {
        if (value) {
             if (currency === 'USD') {
                return '$' + (value * 1.05).toFixed(2);
            } else if (currency === 'ALL') {
                return (value * 116).toFixed(2) + 'ALL';
            } else {
                return '€' + value;
            }
        } else {
            return '€' + value;
        }
    }
}
