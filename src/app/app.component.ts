import { Component, ElementRef, Renderer2, ViewContainerRef, ComponentFactoryResolver, ViewChild, ComponentRef } from '@angular/core';
import { DragHandlerEvent, DragHander } from './drag.event';
import { DraggridComponent } from './components/drag-grid/drag-grid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'AngularDragLayout';
  // 删格 24
  grid1 = '24'
  grid2 = '12 12'
  @ViewChild('container', { read: ViewContainerRef, static: false }) viewContainerRef: ViewContainerRef;
  constructor(private elementRef: ElementRef, private renderer: Renderer2,
    private componentFactoryResolver: ComponentFactoryResolver) {
  }
  /**
   * 开始拖拽动作
   * @param event 
   */
  dragstart_handler(event: DragHandlerEvent, handlerName): void {
    switch (handlerName) {
      case DragHander.grid1:

        break;
      default:
        break;

    }
  }
  /**
   * 执行释放
   * @param event 
   */
  drop_handler(event) {
    if (event.target.className == 'container') {
      event.target.style.background = 'red'
    }
  }
  /**
   * 当元素或选中的文本被拖到一个可释放目标上时触发
   * @param event 
   */
  dragover_handler(event) {
    if (event.target.className.includes('container')) {
      this.appendContainer()

    }
  }
  /**
   * 添加布局
   * @param parentNode 
   */
  appendContainer() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(DraggridComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    this.renderer.appendChild(
      this.viewContainerRef.element.nativeElement,
      ref.location.nativeElement
    );
  }
}
