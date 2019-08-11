import { Injectable, Type, Renderer2, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { AdItemComponent } from './aditem.component';
import { AntdiconComponent } from '../components/antd-ui/icon/antd-icon.component';
import { DraggridComponent } from './components/drag-grid/drag-grid.component';
import { AntdbuttonComponent } from '../components/antd-ui/button/antd-button.component';
import { AntdrateComponent } from '../components/antd-ui/rate/antd-rate.component';
@Injectable()
export class AditemService {
  getAds() {
    return [
      new AdItemComponent(DraggridComponent, { name: 'grid1' }),
      new AdItemComponent(AntdbuttonComponent, { name: 'button' }),
      new AdItemComponent(AntdiconComponent, { name: 'icon' }),
      new AdItemComponent(AntdrateComponent, { name: 'rate' }),
    ];
  }
}
