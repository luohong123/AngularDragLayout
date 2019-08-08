import { Directive, HostListener, Input, OnInit, ElementRef } from '@angular/core';
import { DragService } from './drag.service';

@Directive({
  selector: '[dragName]'
})
export class DragnameDirective {
  @Input('dragName') dragComponentName: string;

  constructor(private dragService: DragService, private el: ElementRef) {
  }
  @HostListener('dragstart', ['$event']) onDragStart(event) {
    event.dataTransfer.setData(this.dragComponentName, null)
  }
}