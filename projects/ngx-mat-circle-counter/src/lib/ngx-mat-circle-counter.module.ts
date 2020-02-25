import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { NgxMatCircleCounterComponent } from './ngx-mat-circle-counter.component';

@NgModule({
  declarations: [NgxMatCircleCounterComponent],
  imports: [
    MatProgressSpinnerModule, CommonModule
  ],
  exports: [NgxMatCircleCounterComponent]
})
export class NgxMatCircleCounterModule { }
