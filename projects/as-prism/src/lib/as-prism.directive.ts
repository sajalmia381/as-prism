import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { AsPrismService } from './as-prism.service';

/**
 * @description highlight with directive
 * @DevelopmentApi
 */
@Directive({
  selector: 'pre[asPrism]',
})
export class AsPrismDirective implements AfterViewInit {
  @Input() asPrism: string = 'json';

  constructor(private el: ElementRef, private asPrismService: AsPrismService) {
    // console.log('el', this.el)
  }

  ngAfterViewInit(): void {
    this.el.nativeElement.classList.add(`language-${this.asPrism}`)
    // console.log(this.el)
    // this.asPrismService.highlightElement(this.el)
  }
}
