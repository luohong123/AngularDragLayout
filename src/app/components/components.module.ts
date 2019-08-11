import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { DragbuttonComponent } from '../core/components/drag-button/drag-button.component';

registerLocaleData(zh);
@NgModule({
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule
  ],
  declarations: [
    DragbuttonComponent,
  ],
  exports: [
    DragbuttonComponent,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class ComponentsModule { }
