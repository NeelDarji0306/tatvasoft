import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight],.appHighlight'
})
export class HighlightDirective {

  constructor(private el:ElementRef) {  }
  
  @HostListener('mouseover') onMouseOver(){
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.backgroundColor = '';
  }

  @HostListener('click') onClick(){
    this.el.nativeElement.style.backgroundColor = 'blue';
  }

  @HostListener('dblclick') onDblClick(){
    alert(this.el.nativeElement.innerText);
  }


}
