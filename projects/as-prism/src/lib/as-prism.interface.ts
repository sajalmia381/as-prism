import { ElementRef } from "@angular/core";
import { HighlighterCallback } from "./as-prism.types";

export interface AsPrism {
  element: ElementRef;
  language: string
}

export interface AsPrismOptions {
  async?: boolean;
  callback?: HighlighterCallback
}