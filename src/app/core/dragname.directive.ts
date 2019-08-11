/*
 * @Author: luohong
 * @Date: 2019-08-08 15:54:36
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-09 17:59:56
 * @Description:
 * @email: 3300536651@qq.com
 */
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
