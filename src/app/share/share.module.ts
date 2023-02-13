import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatListModule,
    MatButtonModule,
    MatSliderModule,
    MatIconModule
  ]
})
export class ShareModule{ }