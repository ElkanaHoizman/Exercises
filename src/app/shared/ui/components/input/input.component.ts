import { Component, forwardRef, Input, input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControleValueAccessorDirective } from '../../directive/controle-value-accessor.directive';

type InputType = 'text' | 'number' | 'email' | 'password';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent<T> extends ControleValueAccessorDirective<T> {
  @Input() inputId = '';
  @Input() required = '';
  @Input() type: InputType = 'text';
  @Input() label = '';
  @Input() customErrorMessages: Record<string, string> = {};
}
