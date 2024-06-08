import { AfterViewInit, Directive, ElementRef, Input, inject } from '@angular/core';
import { AsPrismService } from './as-prism.service';

/**
 * @description highlight with directive
 * @DevelopmentApi
 */
@Directive({
  selector: 'pre[asPrism]',
  host: {
    ngSkipHydration: 'true'
  }
})
export class AsPrismDirective implements AfterViewInit {
  @Input() asPrism: string = 'json';

  private _el = inject(ElementRef);
  private _prismService = inject(AsPrismService)


  ngAfterViewInit(): void {
    this._el.nativeElement.classList.add(`language-${this.asPrism}`)
    // console.log(this.el)
    // this._prismService.highlightElement(this.el)
  }
}
