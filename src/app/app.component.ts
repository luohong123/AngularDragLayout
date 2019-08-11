import { StoreService } from './core/store.service';
/*
 * @Author: luohong
 * @Date: 2019-08-07 10:32:58
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-09 17:43:16
 * @Description:
 * @email: 3300536651@qq.com
 */
import {
  Component, ComponentFactoryResolver, ElementRef,
  OnInit, Renderer2, Type, ViewChild, ViewContainerRef, ViewChildren, Input, Inject, ChangeDetectorRef, ComponentRef, ComponentFactory
} from '@angular/core';
import { AdItemComponent } from './core/aditem.component';
import { AditemService } from './core/aditem.service';
import { ComponentService } from './components/component.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DOCUMENT } from '@angular/common';
import { CommonService } from './common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  // 预览代码
  visible = false;
  placement = 'bottom';
  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi'
  ];
  copied = false;
  rawCode: string;
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
  title = 'AngularDragLayout'
  // 删格 24
  grid1 = '24'
  grid2 = '12 12'
  // UI组件
  selectedUi = 'antd'
  ads: AdItemComponent[];
  @ViewChild('container', { read: ViewContainerRef, static: false }) viewContainerRef: ViewContainerRef;
  constructor(private elementRef: ElementRef, private renderer: Renderer2,
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(DOCUMENT) private dom: any,
    private cdr: ChangeDetectorRef, private aditemService: AditemService) {
  }
  ngOnInit(): void {
    this.ads = this.aditemService.getAds()
    localStorage.setItem('store', JSON.stringify(StoreService.state))
    // 从缓存中读取组件

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
    }
  }
  /**
 * 执行释放
 * @param event
 */
  drop_handler(event) {
    let component = this.ads.filter(item => {
      return item.data['name'] === event.dataTransfer.types[0]
    })
    this.loadDynamicComponent(component[0].component)
  }
  /**
   * 添加布局
   * @param parentNode
   */
  loadDynamicComponent(component: Type<any>) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    const ref: ComponentRef<any> = this.viewContainerRef.createComponent(factory);
    ref.instance['id'] = CommonService.uuidv4();
    this.renderer.listen(ref.location.nativeElement, 'dragover', (event) => {
      console.log('dragover')
    })
    this.renderer.listen(ref.location.nativeElement, 'drop', (event) => {
      console.log('drop');
    })
    this.renderer.listen(ref.location.nativeElement, 'dragenter', (event) => {
      console.log('dragenter')
    })
    // 给动态组件注册事件
    // (<AdItemComponent>componentRef.instance).position = new BlockPosition(event.layerX, event.layerY) ;
    this.renderer.appendChild(
      this.viewContainerRef.element.nativeElement,
      ref.location.nativeElement
    );

  }

  openCode(): void {
    this.visible = true;
  }

  closeCode(): void {
    this.visible = false;
  }
  code1 = `
  @Component({
    selector: 'nz-demo-grid-basic',
  })
  export class NzDemoGridBasicComponent {}
  @Component({
    selector: 'nz-demo-grid-basic',
  })
  export class NzDemoGridBasicComponent {}
  @Component({
    selector: 'nz-demo-grid-basic',
  })
  export class NzDemoGridBasicComponent {}
  @Component({
    selector: 'nz-demo-grid-basic',
  })
  export class NzDemoGridBasicComponent {
    end='abc'
  }
  `
  @Input()
  get code(): string {
    return this.code1 || '';
  }

  set code(value: string) {
    this.code1 = decodeURIComponent(value).trim();
  }
  /**
   * 复制代码
   */
  copy(value: string): Promise<string> {
    const promise = new Promise<string>(
      (resolve): void => {
        // @ts-ignore
        let copyTextArea = null as HTMLTextAreaElement;
        try {
          copyTextArea = this.dom.createElement('textarea');
          copyTextArea.style.height = '0px';
          copyTextArea.style.opacity = '0';
          copyTextArea.style.width = '0px';
          this.dom.body.appendChild(copyTextArea);
          copyTextArea.value = value;
          copyTextArea.select();
          this.dom.execCommand('copy');
          resolve(value);
        } finally {
          if (copyTextArea && copyTextArea.parentNode) {
            copyTextArea.parentNode.removeChild(copyTextArea);
          }
        }
      }
    );

    return promise;
  }
  check() {
    this.cdr.markForCheck();
  }
  copyCode(code: string): void {
    this.copy(code).then(() => {
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
        this.check();
      }, 1000);
    });
  }
  @Input()
  get nzRawCode(): string {
    this.rawCode = this.code1
    return this.rawCode;
  }

  set nzRawCode(value: string) {
    this.rawCode = decodeURIComponent(value).trim();
  }
}
