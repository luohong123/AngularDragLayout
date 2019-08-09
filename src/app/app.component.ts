/*
 * @Author: luohong
 * @Date: 2019-08-07 10:32:58
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-09 17:43:16
 * @Description: 
 * @email: 3300536651@qq.com
 */
import { Component, ComponentFactoryResolver, ElementRef, OnInit, Renderer2, Type, ViewChild, ViewContainerRef, ViewChildren } from '@angular/core';
import { AdItemComponent } from './core/aditem.component';
import { AditemService } from './core/aditem.service';
import { AntdbuttonComponent, buttonTempalte } from './components/antd-ui/button/antd-button.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'AngularDragLayout';
  // 删格 24
  grid1 = '24'
  grid2 = '12 12'
  // UI组件
  selectedUi = 'antd'
  ads: AdItemComponent[];
  @ViewChildren(AppComponent) testRef:ViewContainerRef
  @ViewChild('container', { read: ViewContainerRef, static: false }) viewContainerRef: ViewContainerRef;
  constructor(private elementRef: ElementRef, private renderer: Renderer2,
    private componentFactoryResolver: ComponentFactoryResolver, private aditemService: AditemService) {
  }
  ngOnInit(): void {
    this.ads = this.aditemService.getAds()
  }
  /**
   * 当元素或选中的文本被拖到一个可释放目标上时触发
   * @param event 
   */
  dragover_handler(event) {
    event.preventDefault();
  }
  dragenter_handler(event) {
    if (event.target.className && event.target.className.includes('container')) {
      event.target.style.background = 'blue'
    }
  }
  /**
 * 执行释放
 * @param event 
 */
  drop_handler(event) {
    let component = this.ads.filter(item => {
      return item.data['name'] == event.dataTransfer.types[0]
    })
    this.appendContainer(component[0].component)
  }
  /**
   * 添加布局
   * @param parentNode 
   */
  appendContainer(component: Type<any>) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    const ref = this.viewContainerRef.createComponent(factory);
    
    this.renderer.appendChild(
      this.viewContainerRef.element.nativeElement,
      ref.location.nativeElement
    );
  }
}
