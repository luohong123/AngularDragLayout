/*
 * @Author: luohong
 * @Date: 2019-08-08 14:52:47
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-09 14:13:16
 * @Description:
 * @email: 3300536651@qq.com
 */
import { Component, Type } from '@angular/core';
import { NzRateModule } from 'ng-zorro-antd/rate';
export function structure() {
  let attributes = {
    title: {
      type: 'text',
      value: 'App Bar'
    },
    zDepth: {
      type: 'slider',
      value: 0,
      max: 5,
      min: 0,
      step: 1
    },
    titleClass: {
      type: 'text',
      value: ''
    }
  };
  let slots = {
    left: [],
    right: [],
    default: []
  }
  let template = `
  <nz-rate [ngModel]="0"></nz-rate>
  `
  return { template, attributes, slots }
}
@Component({
  selector: 'antd-button',
  template: `${structure().template}`,
  styles: [`
  `]
})
export class AntdrateComponent {
}
