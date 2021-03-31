import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appCheckboxOnClick]'
})
export class CheckboxOnClickDirective {

  @Input('appCheckboxOnClick') checked = false;

  @HostBinding('class')
  className = '';

}
