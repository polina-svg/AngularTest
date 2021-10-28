import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appOnlineStatus]'
})
export class OnlineStatusDirective  implements OnChanges{
  @Input("appOnlineStatus") isOnline: boolean | undefined;

  constructor(private elementRef: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges){
    this.elementRef.nativeElement.style.backgroundColor = this.isOnline ? 'green' : 'red'
  }

}
