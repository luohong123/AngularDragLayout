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
import { STATIC_MODULE } from 'src/static';
import { AntdbuttonComponent } from '../components/antd-ui/button/antd-button.component';

@Directive({
  selector: '[dragName]'
})
export class DragnameDirective {
  @Input('dragName') dragComponentName: string;

  constructor(private dragService: DragService, private el: ElementRef) {
  }
  @HostListener('dragstart', ['$event']) onDragStart(event) {
    event.dataTransfer.setData(this.dragComponentName, null)
    let img = new AntdbuttonComponent()
    // let img = new Image()
    // img.src = STATIC_MODULE.zixuan1Img
    // var img = new Image(); 
    // img.src = 'example.gif'; 
    if (event.dataTransfer) {
      event.dataTransfer.setDragImage(img, 0, 0)
    }
  }
}