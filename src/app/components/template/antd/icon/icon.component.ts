/*
 * @Author: luohong
 * @Date: 2019-08-12 09:09:29
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-26 13:56:43
 * @Description: 
 * @email: 3300536651@qq.com
 */
import { Component, HostBinding, OnInit, OnChanges } from '@angular/core';
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
  <i nz-icon nzType="ant-design" nzTheme="outline"></i>
  `
  return { template, attributes, slots }
}
@Component({
  selector: 'antd-icon-template',
  template: `
  <div> ${structure().template} </div>
  `,
  styles: [`
  `]
})
export class IconComponent implements OnInit, OnChanges {
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
