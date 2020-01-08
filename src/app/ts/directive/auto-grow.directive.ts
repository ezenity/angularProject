import {Directive, ElementRef, HostListener, Renderer} from '@angular/core';

@Directive({
  // Option what is checked for
  selector: '[autoGrow]'
  // Subscribe to events
  // Do not use below, use @HostListener instead
  // host: {
    // Binding focus to onFocus() method
   // 'focus': 'onFocus()',
   // 'blur': 'onBlur()'
  // }
})

export class AutoGrowDirective {
  // _el We use '_' to reference it is a private field
  //
  // This is an example of longer way of accomplishing this
  // _el: ElementRef;
  // constructor(el: ElementRef, renderer: Renderer) {
  //  this._el = el;
  // }

  // Shorter & cleaner way to accomplish thr above
  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  @HostListener('focus') onFocus() {
    // Basic sample
    this.renderer.setElementStyle(this.el, 'width', '200px');
  }

  @HostListener('onBlur') onBlur() {
    // Basic sample
    this.renderer.setElementStyle(this.el, 'width', '120px');
  }

}
