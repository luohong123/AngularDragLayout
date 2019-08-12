/*
 * @Author: luohong
 * @Date: 2019-08-12 09:09:29
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-12 18:04:11
 * @Description: 
 * @email: 3300536651@qq.com
 */
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { RateComponent } from './rate/rate.component';

registerLocaleData(zh);

@NgModule({
  imports: [
    BrowserModule,
    NgZorroAntdModule
  ],
  declarations: [
    ButtonComponent,
    RateComponent,
    IconComponent
  ],
  exports: [
    ButtonComponent,
    IconComponent,
    RateComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class AntduiModule { }
