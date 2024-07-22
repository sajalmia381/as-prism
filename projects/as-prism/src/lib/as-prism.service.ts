import { ElementRef, Injectable } from '@angular/core';
import * as Prism from 'prismjs';
import { AsPrismOptions } from './as-prism.interface';

@Injectable()
export class AsPrismService {
  /**
   * @param {ElementRef} el - HTMLELement
   * @param {AsPrismOptions} [options] - Highligher Option
   * @publicApi
   */
  public highlightElement(el: ElementRef, options?: AsPrismOptions): void {
    if (el instanceof ElementRef) {
      Prism.highlightElement(
        el.nativeElement,
        options?.async,
        options?.callback
      );
    }
  }

  /**
   * @param {String} code - string
   * @param {String} language - string
   * @experimental this class includes breaking change.
   */
  public highligh(code: string, language: string): string {
    return Prism.highlight(code, {}, language);
  }
}
