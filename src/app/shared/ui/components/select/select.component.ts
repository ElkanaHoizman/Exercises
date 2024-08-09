import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControleValueAccessorDirective } from '../../directive/controle-value-accessor.directive';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent<T> extends ControleValueAccessorDirective<T> {
  @Input() selectId = '';
  @Input() label = '';
  @Input() customErrorMessages: Record<string, string> = {};
  @Input() options: T[] = [];
}
