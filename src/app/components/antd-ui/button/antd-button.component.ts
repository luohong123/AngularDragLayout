/*
 * @Author: luohong
 * @Date: 2019-08-08 14:52:47
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-09 14:13:16
 * @Description:
 * @email: 3300536651@qq.com
 */
import { Component, Type } from '@angular/core';
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
  <button nz-button nzType="primary">Primary${attributes.title.value}</button>
  `
  return { template, attributes, slots }
}
@Component({
  selector: 'antd-button',
  template: `${structure().template}`,
  styles: [`
  `]
})
export class AntdbuttonComponent {
}
