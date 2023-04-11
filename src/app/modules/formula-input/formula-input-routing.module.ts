import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaInputComponent} from "./formula-input.component";

const routes: Routes = [
  {path: '', component: FormulaInputComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulaInputRoutingModule { }
