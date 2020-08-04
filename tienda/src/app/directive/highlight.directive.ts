import { Directive, ElementRef } from '@angular/core';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    element: ElementRef
  ) {
    element.nativeElement.style.backgroundColor = 'green';
  }

}
