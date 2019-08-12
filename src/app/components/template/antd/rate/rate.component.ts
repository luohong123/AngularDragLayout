/*
 * @Author: luohong
 * @Date: 2019-08-08 14:52:47
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-12 17:47:04
 * @Description:
 * @email: 3300536651@qq.com
 */
import { Component } from '@angular/core';
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
  selector: 'antd-rate-template',
  template: `${structure().template}`,
  styles: [`
  `]
})
export class RateComponent {
}
