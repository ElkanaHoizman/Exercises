import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './ui/components/button/button.component';
import { InputComponent } from './ui/components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControleValueAccessorDirective } from './ui/directive/controle-value-accessor.directive';
import { ValidationErrorsComponent } from './ui/components/validation-errors/validation-errors.component';
import { SelectComponent } from './ui/components/select/select.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    ControleValueAccessorDirective,
    ValidationErrorsComponent,
    SelectComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ButtonComponent, InputComponent, SelectComponent],
})
export class SharedModule {}
