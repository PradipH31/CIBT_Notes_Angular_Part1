import { Directive, ElementRef, HostListener } from '@angular/core';
import { ElementSchemaRegistry } from '@angular/compiler';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('click') onclick() {
    this.el.nativeElement.style.color = 'white';
  }

}
