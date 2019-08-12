/*
 * @Author: luohong
 * @Date: 2019-08-08 15:54:36
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-12 17:11:20
 * @Description:
 * @email: 3300536651@qq.com
 */
import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[dragName]'
})
export class DragnameDirective {
  @Input('dragName') dragComponentName: string;

  constructor() {
  }
  @HostListener('dragstart', ['$event']) onDragStart(event) {
    event.dataTransfer.setData(this.dragComponentName, null)
  }
}
