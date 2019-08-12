/*
 * @Author: luohong
 * @Date: 2019-08-12 09:09:29
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-12 17:40:30
 * @Description: 
 * @email: 3300536651@qq.com
 */
import { Injectable } from '@angular/core';



import { AdItemComponent } from '../components/aditem.component';
import { GridComponent } from 'src/app/components/template/antd/grid/grid.component';
import { ButtonComponent } from 'src/app/components/template/antd/button/button.component';
import { IconComponent } from 'src/app/components/template/antd/icon/icon.component';
import { RateComponent } from 'src/app/components/template/antd/rate/rate.component';
@Injectable()
export class AditemService {
  getAds() {
    return [
      new AdItemComponent(GridComponent, { name: 'grid1' }),
      new AdItemComponent(ButtonComponent, { name: 'button' }),
      new AdItemComponent(IconComponent, { name: 'icon' }),
      new AdItemComponent(RateComponent, { name: 'rate' }),
    ];
  }
  getComponentByUi(ui: string) {
    let result
    if (ui && ui === 'antd') {
      result = [
        { name: 'grid1' },
        { name: 'button' },
        { name: 'icon' },
        { name: 'rate' }
      ]
    }
    return result
  }
  getAttributes(id: string, callback) {
    let obj = localStorage.getItem('store')
    let template = callback().template
    return template
  }
}
