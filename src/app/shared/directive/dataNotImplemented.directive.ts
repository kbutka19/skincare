import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
    selector: '[data-not-implemented]'
})

export class DataNotImplementedDirective {
    @Output()
    notImplemented: EventEmitter<string> = new EventEmitter();
    @Input('data-not-implemented')
    public type: string;

    @HostListener('click', ['$event']) onClick() {
        if (this.type) {
            this.notImplemented.emit('Results not implemented');
        }
    }


}
