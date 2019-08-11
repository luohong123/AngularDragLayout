import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AntdiconComponent } from './icon/antd-icon.component';
import { AntdbuttonComponent } from './button/antd-button.component';
import { AntdrateComponent } from './rate/antd-rate.component';

registerLocaleData(zh);

@NgModule({
  entryComponents: [
    AntdbuttonComponent,
    AntdiconComponent,
    AntdrateComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule
  ],
  declarations: [
    AntdbuttonComponent,
    AntdiconComponent,
    AntdrateComponent
  ],
  exports: [

  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AntduiModule { }
