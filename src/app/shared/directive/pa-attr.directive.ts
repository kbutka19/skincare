import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';
import { Product } from '../models/product.model';


@Directive({
    selector: '[pa-attr]'
})

export class PaAttrDirective {
    @Input('pa-attr')
    @HostBinding('class')
    bgColor: string;
    @Input('pa-product')
    product: Product;
    @Output('pa-category')
    click = new EventEmitter<string>();
    @HostListener('click')
    customEvent() {
        if (this.product) {
            this.click.emit(this.product.category);
        }
    }

}