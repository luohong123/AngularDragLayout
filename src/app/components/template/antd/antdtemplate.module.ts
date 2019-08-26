/*
 * @Author: luohong
 * @Date: 2019-08-12 09:09:29
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-26 13:59:16
 * @Description:
 * @email: 3300536651@qq.com
 */
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { ButtonComponent } from './button/button.component';
import { GridComponent } from './grid/grid.component';
import { IconComponent } from './icon/icon.component';
import { RateComponent } from './rate/rate.component';



registerLocaleData(zh);

@NgModule({
  entryComponents: [
    ButtonComponent,
    IconComponent,
    RateComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule
  ],
  declarations: [
    ButtonComponent,
    IconComponent,
    RateComponent,
    GridComponent
  ],
  exports: [
    ButtonComponent,
    IconComponent,
    RateComponent,
    GridComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class AntdtemplateModule { }
