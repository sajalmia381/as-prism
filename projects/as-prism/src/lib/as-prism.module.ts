import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AsPrismComponent } from './as-prism.component';
import { AsPrismService } from './as-prism.service';

@NgModule({
  declarations: [AsPrismComponent],
  imports: [CommonModule],
  exports: [AsPrismComponent],
  providers: [AsPrismService]
})
export class AsPrismModule { }
