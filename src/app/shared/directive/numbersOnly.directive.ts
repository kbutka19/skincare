import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[numbersOnly]'
})
export class NumbersOnlyDirective {
  constructor(private _el: ElementRef, private control: NgControl) {
    console.log(control)
  }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    this.control.valueAccessor.writeValue(this._el.nativeElement.value);
    if (initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
