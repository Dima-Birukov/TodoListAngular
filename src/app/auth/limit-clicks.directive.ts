import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appLimitClicks]'
})
export class LimitClicksDirective {
  count = 0;
  @Input('appLimitClicks')
  limit = 0;

  @HostBinding('disabled')
  disabled = false;

  @HostListener('click')
  onClick(): void{
    if (++this.count === this.limit){
      this.disabled = true;
    }
  }

}
