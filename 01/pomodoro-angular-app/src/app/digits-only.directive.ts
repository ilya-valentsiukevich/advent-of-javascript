import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[digitsOnly]'
})
export class DigitsOnlyDirective {
  private navigationKeys = [
    'Backspace',
    'Delete',
    'Tab',
    'Escape',
    'Enter',
    'Home',
    'End',
    'ArrowLeft',
    'ArrowRight',
    'Clear',
    'Copy',
    'Paste'
  ];

  constructor() {
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    if (
      this.navigationKeys.indexOf(e.key) > -1 ||
      (e.key === 'a' && e.ctrlKey) ||
      (e.key === 'c' && e.ctrlKey) ||
      (e.key === 'v' && e.ctrlKey) ||
      (e.key === 'x' && e.ctrlKey) ||
      (e.key === 'a' && e.metaKey) ||
      (e.key === 'c' && e.metaKey) ||
      (e.key === 'v' && e.metaKey) ||
      (e.key === 'x' && e.metaKey)
    ) {
      return;
    }

    if (e.key === ' ' || isNaN(Number(e.key))) {
      e.preventDefault();
    }
  }
}
