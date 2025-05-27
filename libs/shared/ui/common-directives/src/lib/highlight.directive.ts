import { Directive, ElementRef, inject, OnInit, Input, HostListener } from '@angular/core';


@Directive({
  selector: '[btLibsUiHighlight]', //selector to be used in the destination html
  standalone: true,
})
export class HighlightDirective implements OnInit {

  private element = inject(ElementRef).nativeElement;

  // Input property to accept custom colors
  @Input() btLibsUiHighlight = 'blue'; // Default to blue if no input is provided
  @Input() textColor = 'white'; // Default text color on hover
  @Input() background = 'orange'; // Default hover background

  private originalColor!: string;
  private originalBackground!: string;


  ngOnInit(): void {

    // Store original styles when directive initializes
    this.originalBackground = this.element.style.backgroundColor || 'white'; //blue OR white IF NOT 
    this.originalColor = this.element.style.color || 'black'; //default to black

    //initial background color of the html balise, <a> in the case of navbar and applying this.btLibsUiHighlight to <a> backgroundColor (background-color)
    this.element.style.backgroundColor = this.btLibsUiHighlight; //blue, can be changed on destination component html
  }

  
  @HostListener('mouseenter') onMouseEnter() {

    //store originals
    this.originalBackground = this.element.style.backgroundColor;
    this.originalColor = this.element.style.color;

    //the colors to be changed when hover
    this.element.style.backgroundColor = this.background;
    this.element.style.color = this.textColor;
  }

  @HostListener('mouseleave') onMouseLeave() {

    //come back to originals
    this.element.style.backgroundColor = this.originalBackground;
    this.element.style.color = this.originalColor;

  }

  /*
  You can also inject ElementRef by using constructor injection instead of the inject function and then
  add the background color and text color inside the function brackets of the constructor. Alternatively,
  if you only want to set a style, CSS class, or attribute on the host element, you can use the
  @HostBinding() decorator
  */
  //constructor() {}
}
