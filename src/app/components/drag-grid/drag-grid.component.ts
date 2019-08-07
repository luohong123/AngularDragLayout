import { Component } from '@angular/core';

@Component({
  selector: 'drag-grid',
  templateUrl: './drag-grid.component.html',
  styles: [`
    .drag-grid {
      color: #dfa612;
      border: 2px dashed #FAE042;
      padding: 10px;
    }
    .drag-grid-col{
      background: #1A1D24;
      padding: 20px;
      border-radius: 4px;
      position: relative;
    }
    .drag-grid-col::after{
      content: 'col';
      height: 22px;
      line-height: 22px;
      padding: 0 2px;
      background-color: #E84279;
      color: #fff;
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 2px;
    }
  `]
})
export class DraggridComponent {
}
