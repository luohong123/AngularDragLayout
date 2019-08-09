import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AntdbuttonComponent } from './button/antd-button.component';
import { AntdiconComponent } from './icon/antd-icon.component';

registerLocaleData(zh);

@NgModule({
  entryComponents: [
    AntdbuttonComponent,
    AntdiconComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule
  ],
  declarations: [
    AntdbuttonComponent,
    AntdiconComponent
  ],
  exports: [

  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class AntduiModule { }