/*
 * @Author: luohong
 * @Date: 2019-08-12 09:09:29
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-12 18:11:23
 * @Description:
 * @email: 3300536651@qq.com
 */
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';


registerLocaleData(zh);

@NgModule({
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule
  ],
  declarations: [
  ],
  exports: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }]
})
export class MaterialuiModule { }
