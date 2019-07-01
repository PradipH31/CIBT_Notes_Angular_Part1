import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { ElementSchemaRegistry } from '@angular/compiler';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  color = 'white';
  @Input() highlightColor = 'green';

  constructor(private el: ElementRef) {
    this.changeColor();
    this.highlight();
  }

  @HostListener('click') onclick() {
    this.changeColor();
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.color = 'red';
    this.changeColor();
    this.highlight();
  }

  @HostListener('mouseleave') onmouseleave() {
    this.color = 'white';
    this.changeColor();
  }

  changeColor() {
    this.el.nativeElement.style.color = this.color;
  }

  highlight() {
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }

}
