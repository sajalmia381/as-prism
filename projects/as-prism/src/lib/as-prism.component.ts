import { AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { AsPrismService } from './as-prism.service';
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

  constructor(private prismService: AsPrismService) { }

  ngAfterViewInit() {
    this.prismService.highlightElement(this.codeEle)
  }

  ngOnChanges(changes: any) {
    if (changes?.code) {
      if (this.codeEle?.nativeElement) {
        this.codeEle.nativeElement.textContent = this.code;
        this.prismService.highlightElement(this.codeEle)
      }
    }
  }
}
