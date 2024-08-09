import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'base-btn',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
  @Input() buttonText?: string;
  @Input() buttonSubmit = false;
  buttonType?: string;

  @Input() isDisabled?: boolean;
  @Output() buttonClick: EventEmitter<any>;
  constructor() {
    this.buttonClick = new EventEmitter<any>();
    this.buttonType = this.buttonSubmit ? `submit` : `button`;
  }
  ngOnInit() {
    this.buttonText = this.buttonText ? this.buttonText : `No buttonText`;
  }

  onClick(): any {
    if (this.isDisabled) {
      return;
    } else {
      this.buttonClick.emit(true);
    }
  }
}
