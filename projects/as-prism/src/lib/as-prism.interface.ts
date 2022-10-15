import { ElementRef } from "@angular/core";
import * as Prism from "prismjs";

export interface AsPrism {
  element: ElementRef;
  language: string
}

export interface AsPrismOptions {
  async?: boolean;
  callback?: Prism.HighlightCallback
}