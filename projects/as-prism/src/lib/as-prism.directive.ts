import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  inject,
} from '@angular/core';
// import { AsPrismService } from './as-prism.service';

/**
 * @description highlight with directive
 * @experimental
 */
@Directive({
  selector: 'pre[asPrism]',
  host: {
    ngSkipHydration: 'true',
  },
})
export class AsPrismDirective implements AfterViewInit {
  @Input('asPrism') public language: string = 'json';

  private _el = inject(ElementRef);
  // private _prismService = inject(AsPrismService);

  ngAfterViewInit(): void {
    this._el.nativeElement.classList.add(`language-${this.language}`);
    // console.log(this._el.nativeElement);
    // this._prismService.highlightElement(this._el);
  }
}
