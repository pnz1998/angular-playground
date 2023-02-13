import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatListModule,
    MatButtonModule
  ]
})
export class ShareModule{ }