import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import { AsPrismComponent } from './as-prism.component';
import { AsPrismDirective } from './as-prism.directive';
import { AsPrismService } from './as-prism.service';

@NgModule({
  declarations: [AsPrismComponent, AsPrismDirective],
  imports: [CommonModule],
  exports: [AsPrismComponent, AsPrismDirective],
  providers: [AsPrismService],
})
export class AsPrismModule {}
