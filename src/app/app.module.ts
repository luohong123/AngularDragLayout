/*
 * @Author: luohong
 * @Date: 2019-08-07 10:32:58
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-26 14:38:59
 * @Description:
 * @email: 3300536651@qq.com
 */
import { DragDropModule } from '@angular/cdk/drag-drop';
import { registerLocaleData, APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AntdtemplateModule } from './components/template/antd/antdtemplate.module';
// import { AntduiModule } from './components/ui/antd/antdui.module';

import { CommonService } from './core/common/common.service';
import { DragbuttonComponent } from './core/components/drag-button/drag-button.component';
import { PreviewComponent } from './core/components/preview/preview.component';
import { ShareComponent } from './core/components/share/share.component';
import { DragnameDirective } from './core/directive/dragname.directive';
import { AditemService } from './core/service/aditem.service';
import { DragService } from './core/service/drag.service';
import { StoreService } from './core/service/store.service';
import { MaterialuiModule } from './components/ui/material/materialui.module';
import { AntduiModule } from './components/ui/antd/index.module';
import { ShareService } from './core/service/share.service';


registerLocaleData(zh);

@NgModule({
  entryComponents: [
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragDropModule,
    AntduiModule,
    AntdtemplateModule,
    MaterialuiModule
  ],
  declarations: [
    AppComponent,
    DragnameDirective,
    PreviewComponent,
    ShareComponent,
    DragbuttonComponent
  ],
  exports: [
  ],
  providers: [
    {
      provide: NZ_I18N,
      useValue: zh_CN
    },
    { provide: APP_BASE_HREF, useValue: '/' },
    AditemService,
    CommonService,
    DragService,
    ShareService,
    StoreService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent]
})
export class AppModule { }
