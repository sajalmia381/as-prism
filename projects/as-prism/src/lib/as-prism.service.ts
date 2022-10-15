import { ElementRef, Injectable } from '@angular/core';
import * as Prism from "prismjs";
import { AsPrismOptions } from './as-prism.interface';

@Injectable()
export class AsPrismService {

  constructor() { }

  /*
  * @param {el: ElementRef, option: AsPrismOptions}
  */
  public highlightElement(el: ElementRef, options?: AsPrismOptions): void {
    if (el instanceof ElementRef) {
      Prism.highlightElement(el.nativeElement, options?.async, options?.callback);
    }
  }
}
