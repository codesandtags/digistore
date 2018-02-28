import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreDisplayComponent } from './score-display/score-display.component';
import { AttemptsRegisterComponent } from './attempts-register/attempts-register.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { CountDownComponent } from './count-down/count-down.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [ScoreDisplayComponent, AttemptsRegisterComponent, CountDownComponent],
  exports: [ScoreDisplayComponent, AttemptsRegisterComponent, CountDownComponent]
})
export class ScoreModule {
}
