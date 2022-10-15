import { AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import * as Prism from 'prismjs';
@Component({
  selector: 'as-prism',
  template: `
    <pre *ngIf="language" [class]="'language-' + language">
      <code #codeEle [class]="'language-' + language">{{code}}</code>
    </pre>
  `,
  styles: [
  ]
})
export class AsPrismComponent implements AfterViewInit, OnChanges {
  @ViewChild('codeEle') codeEle!: ElementRef;
  @Input() code!: string;

  @Input() language: string = 'json';
  // get language(): string { return this._language; }
  // set language(language: string) {
  //   this._language = language || 'json';
  // }
  // private _language: string = "json"

  constructor() {
    console.log("Languages", Prism.languages)
  }

  ngAfterViewInit() {
    Prism.highlightElement(this.codeEle?.nativeElement);
  }

  ngOnChanges(changes: any) {
    if (changes?.code) {
      if (this.codeEle?.nativeElement) {
        this.codeEle.nativeElement.textContent = this.code;
        Prism.highlightElement(this.codeEle?.nativeElement);
      }
    }
  }
}
