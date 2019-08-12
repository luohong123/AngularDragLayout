/*
 * @Author: luohong
 * @Date: 2019-08-12 09:09:29
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-12 17:47:32
 * @Description:
 * @email: 3300536651@qq.com
 */
import { Component, HostBinding, OnChanges, OnInit } from '@angular/core';

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
  <div nz-row nzGutter="32">
    <div nz-col  nzSpan="12">
    </div>
    <div nz-col nzSpan="12"></div>
  </div>
  `
  return { template, attributes, slots }
}

@Component({
  selector: 'antd-grid-template',
  template: `
  <div class="drag-grid">
    <span class="row-mark">row</span>
    <div class="drag-grid-toolbar">
      <button nz-button nzType="dashed" nzSize="small" nz-tooltip nzTitle="拖动" class="drag-button"><i nz-icon
          nzType="drag"></i></button>
      <button nz-button nzType="dashed" nzSize="small" nz-tooltip nzTitle="删除" class="drag-button"><i nz-icon
          nzType="delete"></i></button>
    </div>
    ${structure().template}
  </div>
`,
  styles: [`
    .drag-grid {
      color: #dfa612;
      border: 2px solid #f2f4f5;
      padding: 30px 20px 20px;
      position: relative;
      margin: 10px;
      border-radius: 4px;
      background: #e8e8e8;
    }
    .row-mark {
      height: 22px;
      line-height: 22px;
      padding: 0 2px;
      background-color: rgb(190, 200, 200);
      color: #fff;
      position: absolute;
      left: 0;
      top: 0;
      border-bottom-right-radius: 2px;
    }
    .drag-grid .ant-row>div{
      padding: 40px 20px 20px;
      border-radius: 4px;
      position: relative;
      border: 1px solid rgb(190, 200, 200);
      background: #fff;
    }
    .drag-grid .ant-row>div::after{
      content: 'column';
      height: 22px;
      line-height: 22px;
      padding: 0 2px;
      background-color: rgb(190, 200, 200);
      color: #fff;
      position: absolute;
      left: 0;
      top: 0;
      border-bottom-right-radius: 2px;
    }
    .drag-grid-toolbar {
      position: absolute;
      right: 5px;
      top: 0px;
    }
    .drag-grid-toolbar button {
      margin-left: 10px;
    }
  `]
})
export class GridComponent implements OnInit, OnChanges {

  @HostBinding('id') id: string;

  // 属性
  attributes: any
  constructor() {
  }
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
