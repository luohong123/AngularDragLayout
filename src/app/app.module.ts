/*
 * @Author: luohong
 * @Date: 2019-08-07 10:32:58
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-09 17:38:27
 * @Description:
 * @email: 3300536651@qq.com
 */
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { AditemService } from './core/aditem.service';
import { AntduiModule } from './components/antd-ui/antdui.module';
import { DragnameDirective } from './core/dragname.directive';
import { DragService } from './core/drag.service';
import { StoreService } from './core/store.service';
import { ComponentService } from './components/component.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DraggridComponent } from './core/components/drag-grid/drag-grid.component';
registerLocaleData(zh);

@NgModule({
  entryComponents: [
    DraggridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ComponentsModule,
    AntduiModule,
    DragDropModule
  ],
  declarations: [
    AppComponent,
    DragnameDirective,
    DraggridComponent
  ],
  exports: [
    DraggridComponent
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN },
    AditemService,
    DragService,
    StoreService,
    ComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
