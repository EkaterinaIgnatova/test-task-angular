import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaInputRoutingModule } from "./formula-input-routing.module";
import { FormulaInputComponent } from './formula-input.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    FormulaInputComponent
  ],
  exports: [
    FormulaInputComponent
  ],
  imports: [
    CommonModule,
    FormulaInputRoutingModule,
    InputTextModule,
    FormsModule
  ]
})
export class FormulaInputModule { }
