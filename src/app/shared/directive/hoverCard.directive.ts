import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: "[hoverCard]"
})

export class HoverCardDirective {
    constructor(private _el: ElementRef) { }

    @HostListener('mouseenter') mouseOver() {
        this._el.nativeElement.classList.add('zoomIn');

    }
    @HostListener('mouseleave') mouseOut() {
        this._el.nativeElement.classList.remove('zoomIn');
    }
}
