import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ], exports: [FormsComponent]
})
export class FormsModule { }
