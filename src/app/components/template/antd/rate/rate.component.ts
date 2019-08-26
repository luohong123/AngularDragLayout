/*
 * @Author: luohong
 * @Date: 2019-08-08 14:52:47
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-26 14:07:26
 * @Description:
 * @email: 3300536651@qq.com
 */
import { Component, OnInit, OnChanges, HostBinding } from '@angular/core';
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
  template: `<div>${structure().template}</div>`,
  styles: [`
  `]
})
export class RateComponent implements OnInit, OnChanges {
  @HostBinding('id') id: string;
  ngOnInit(): void {
    this.getAttributes(this.id)

  }
  ngOnChanges(): void {
  }
  getAttributes(id: string) {
    let obj = localStorage.getItem('store')
    let template = structure().template
    return template
  }
}
