import { Directive, ElementRef, HostListener } from '@angular/core';
import { ElementSchemaRegistry } from '@angular/compiler';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  color = 'white';
  backgroundColor = 'green';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = this.backgroundColor;
  }

  @HostListener('click') onclick() {
    this.changeColor();
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.color = 'red';
    this.changeColor();
  }

  @HostListener('mouseleave') onmouseleave() {
    this.color = 'white';
    this.changeColor();
  }

  changeColor() {
    this.el.nativeElement.style.color = this.color;
  }

}
