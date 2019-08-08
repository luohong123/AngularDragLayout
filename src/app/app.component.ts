import { Component, ElementRef, Renderer2, ViewContainerRef, ComponentFactoryResolver, ViewChild, ComponentRef, Type, OnInit } from '@angular/core';
import { DragHandlerEvent, DragHander } from './drag.event';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AdItemComponent } from './core/aditem.component';
import { AditemService } from './core/aditem.service';
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
    console.dir(event, 'dragover')
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
    console.log(this.elementRef, 'ref.location.nativeElement')
  }
}
