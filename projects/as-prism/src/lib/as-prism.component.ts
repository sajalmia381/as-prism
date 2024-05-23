import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { AsPrismService } from './as-prism.service';

@Component({
  selector: 'as-prism',
  template: `
    <pre [class]="'language-' + language">
      <code #codeEle [class]="'language-' + language">{{code}}</code>
    </pre>
    <button
      *ngIf="showCopyBtn"
      class="as-prism__copy-btn"
      type="button"
      (click)="onCopy()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20px"
        viewBox="0 -960 960 960"
        width="20px"
        fill="currentColor"
      >
        <path
          d="M360-240q-29.7 0-50.85-21.15Q288-282.3 288-312v-480q0-29.7 21.15-50.85Q330.3-864 360-864h384q29.7 0 50.85 21.15Q816-821.7 816-792v480q0 29.7-21.15 50.85Q773.7-240 744-240H360Zm0-72h384v-480H360v480ZM216-96q-29.7 0-50.85-21.15Q144-138.3 144-168v-552h72v552h456v72H216Zm144-216v-480 480Z"
        />
      </svg>
    </button>
  `,
  styles: [
    `
      :host {
        position: relative;
        display: block;
      }
      :host:hover {
        .as-prism__copy-btn {
          opacity: 1;
        }
      }
      .as-prism__copy-btn {
        position: absolute;
        right: 20px;
        top: 20px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.2s ease-in;
        height: 30px;
        width: 30px;
        line-height: 38px;
        padding: 0;
        text-align: center;
      }
    `,
  ],
})
export class AsPrismComponent implements OnChanges, AfterViewInit {
  @ViewChild('codeEle') codeEle!: ElementRef;

  @Input() code!: string;
  @Input() language: string = 'json';
  @Input() showCopyBtn: boolean = true;

  constructor(private prismService: AsPrismService) {}

  ngAfterViewInit() {
    this.prismService.highlightElement(this.codeEle);
  }

  ngOnChanges(changes: any) {
    if (changes?.code) {
      if (this.codeEle?.nativeElement) {
        this.codeEle.nativeElement.textContent = this.code;
        this.prismService.highlightElement(this.codeEle);
      }
    }
  }

  onCopy() {
    navigator.clipboard.writeText(this.code);
  }
}
