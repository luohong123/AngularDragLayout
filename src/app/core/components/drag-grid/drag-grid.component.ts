import { Component, OnInit, HostBinding } from '@angular/core';
import { CommonService } from 'src/app/common.service';

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
  <div class="drag-grid">
  <span class="row-mark">row ${attributes.title.value}00</span>
  <div class="drag-grid-toolbar">
    <button nz-button nzType="dashed" nzSize="small" nz-tooltip nzTitle="拖动" class="drag-button"><i nz-icon
        nzType="drag"></i></button>
    <button nz-button nzType="dashed" nzSize="small" nz-tooltip nzTitle="删除" class="drag-button"><i nz-icon
        nzType="delete"></i></button>
  </div>
  <div nz-row nzGutter="32">
    <div nz-col #7b75906a nzSpan="12" class="drag-grid-col">
    </div>
    <div nz-col #col nzSpan="12" class="drag-grid-col"></div>
  </div>
</div>
  `
  return { template, attributes, slots }
}

@Component({
  selector: 'drag-grid',
  template: `${structure().template}`,
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
    .drag-grid-col{
      padding: 40px 20px 20px;
      border-radius: 4px;
      position: relative;
      border: 1px solid rgb(190, 200, 200);
      background: #fff;
    }
    .drag-grid-col::after{
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
export class DraggridComponent implements OnInit {
  @HostBinding('id') id: string;
  constructor() {
  }
  ngOnInit(): void {
  }
}
