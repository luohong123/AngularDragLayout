import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { DraggridComponent } from '../core/components/drag-grid/drag-grid.component';
import { DragbuttonComponent } from '../core/components/drag-button/drag-button.component';

registerLocaleData(zh);

@NgModule({
  entryComponents: [
    DraggridComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule
  ],
  declarations: [
    DragbuttonComponent,
    DraggridComponent
  ],
  exports: [
    DragbuttonComponent,
    DraggridComponent
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})
export class ComponentsModule { }