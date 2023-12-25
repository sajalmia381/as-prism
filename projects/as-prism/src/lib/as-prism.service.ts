import { ElementRef, Injectable } from '@angular/core';
import * as Prism from "prismjs";
import { AsPrismOptions } from './as-prism.interface';

@Injectable()
export class AsPrismService {
  /**
   * @param {ElementRef} el - HTMLELement
   * @param {AsPrismOptions} [options] - Highligher Option
   */
  public highlightElement(el: ElementRef, options?: AsPrismOptions): void {
    if (el instanceof ElementRef) {
      Prism.highlightElement(el.nativeElement, options?.async, options?.callback);
    }
  }

  // public highligh(code: string, language: string): string {
  //   Prism.highlight(code, language)
  // }
}
