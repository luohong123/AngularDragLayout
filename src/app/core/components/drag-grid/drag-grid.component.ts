import { Component } from '@angular/core';

@Component({
  selector: 'drag-grid',
  templateUrl: './drag-grid.component.html',
  styles: [`
    .drag-grid {
      color: #dfa612;
      border: 2px solid #FAE042;
      padding: 30px 20px 20px;
      position: relative;
      margin: 10px;
      border-radius: 4px;
      background: rgba(236, 198, 48, 0.1);
    }
    .row-mark {
      height: 22px;
      line-height: 22px;
      padding: 0 2px;
      background-color: #E84279;
      color: #fff;
      position: absolute;
      left: 0;
      top: 0;
      border-bottom-right-radius: 2px;
    }
    .drag-grid-col{
      background: #1A1D24;
      padding: 40px 20px 20px;
      border-radius: 4px;
      position: relative;
      box-shadow: inset 0 -3px 0 #242527;
      border: 2px dashed #FAE042;
    }
    .drag-grid-col::after{
      content: 'column';
      height: 22px;
      line-height: 22px;
      padding: 0 2px;
      background-color: #E84279;
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
export class DraggridComponent {
}
