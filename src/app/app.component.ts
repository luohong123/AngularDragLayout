
/*
 * @Author: luohong
 * @Date: 2019-08-07 10:32:58
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-13 17:54:29
 * @Description:
 * @email: 3300536651@qq.com
 */
import { DOCUMENT } from '@angular/common';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, ElementRef,
  Inject, Input, OnInit, Renderer2, Type, ViewChild, ViewContainerRef, Injector, TemplateRef
} from '@angular/core';

import { NzMessageService, NzModalService } from 'ng-zorro-antd';

import { CommonService } from './core/common/common.service';
import { AdItemComponent } from './core/components/aditem.component';
import { AditemService } from './core/service/aditem.service';
import { PreviewComponent } from './core/components/preview/preview.component';
import { StoreService } from './core/service/store.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  // 预览代码
  visible = false;
  // 抽屉位置
  placement = 'bottom';
  // 复制
  copied = false;
  // 代码
  rawCode: string;
  // 标题
  title = 'AngularDragLayout'
  // 删格 24
  grid1 = '24'
  grid2 = '12 12'
  // 代码
  code1 = ''
  // UI类型
  uiTypes = [{
    value: 'antd', label: 'Ant Design'
  }, {
    value: 'materil', label: 'Material'
  }]
  // UI组件
  selectedUi = this.uiTypes[0].value
  // 选中的组件
  selectedComponent = ''
  // 组件标志
  componentMarks = [{
    label: '属性',
    value: 'property'
  }, {
    label: '其它',
    value: 'other'
  }]
  // 组件标志类型
  componentType = this.componentMarks[0].value
  // 动态组件
  dynamicComponent: ComponentRef<any>
  // 存动态组件
  dynamicComponents: any = []
  // 每一个动态组件
  ads: AdItemComponent[];
  // 属性
  properties = {
    size: [
      { label: '大', value: 'big' },
      { label: '默认', value: 'default' },
      { label: '小', value: 'small' }
    ]
  }
  // 代码预览抽屉
  @ViewChild('previewCodeDrawer', { read: ViewContainerRef, static: false }) previewCodeDrawer: ViewContainerRef
  // 容器
  @ViewChild('container', { read: ViewContainerRef, static: false }) viewContainerRef: ViewContainerRef;
  constructor(private renderer: Renderer2,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
    private storeService: StoreService,
    private commonService: CommonService,
    @Inject(DOCUMENT) private dom: any,
    private modalService: NzModalService,
    private message: NzMessageService,
    private cdr: ChangeDetectorRef, private aditemService: AditemService) {
  }
  ngOnInit(): void {
    this.ads = this.aditemService.getAds()
    localStorage.setItem('store', JSON.stringify(this.storeService.state))
    // 从缓存中读取组件
    // 根据ui类型获取组件
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
    if (event.target.className && event.target.className.includes('container')) {
      this.loadDynamicComponent(component[0].component, component[0])
    }
  }
  /**
   * 添加布局
   * @param parentNode
   */
  loadDynamicComponent(component: Type<any>, data: any) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.dynamicComponent = this.viewContainerRef.createComponent(factory);
    let id = this.dynamicComponent.instance['id']
    let parentRef;
    this.code1 += this.dynamicComponent.instance.getAttributes(this.dynamicComponent.instance['id']);
    if (!this.dynamicComponent.instance['id']
      || this.dynamicComponent.instance['id'] === ''
      || this.dynamicComponent.instance['id'] === undefined
      || this.dynamicComponent.instance['id'] === null) {
      this.dynamicComponent.instance['id'] = this.commonService.uuidv4();
    }
    this.renderer.listen(this.dynamicComponent.location.nativeElement, 'dragover', (event) => {
      console.log('dragover')
      if (data.data.name === 'grid1') {
        console.log('是否放到grid1里面')
        console.log(this.viewContainerRef.element.nativeElement)
      }
    })
    this.renderer.listen(this.dynamicComponent.location.nativeElement, 'drop', (event) => {
      console.log('drop');
      if (data.data.name === 'grid1') {

        this.slotDynamicComponent(event, parentRef)

      }

    })
    this.renderer.listen(this.dynamicComponent.location.nativeElement, 'dragenter', (event) => {
      console.log('dragenter')
    })
    this.renderer.listen(this.dynamicComponent.location.nativeElement, 'click', (event) => {
      this.selectedComponent = data.data.name
    })
    this.renderer.appendChild(
      this.viewContainerRef.element.nativeElement,
      this.dynamicComponent.location.nativeElement
    );
    this.dynamicComponents.push(this.dynamicComponent)
  }
  slotDynamicComponent(event, ref: any) {
    let component = this.ads.filter(item => {
      return item.data['name'] === event.dataTransfer.types[0]
    })
    let factory = this.componentFactoryResolver.resolveComponentFactory(component[0].component);
    let childDynamicComponent = ref.createComponent(factory);
    this.renderer.appendChild(
      ref.element.nativeElement,
      childDynamicComponent.location.nativeElement
    );
  }
  /**
   * 预览
   */
  preview() {
    const modal = this.modalService.create({
      nzTitle: '预览',
      nzWidth: '80%',
      nzContent: PreviewComponent,
      nzComponentParams: {
        code: this.code1
      },
      nzFooter: [
        {
          label: '复制代码',
          type: 'primary',
          onClick: componentInstance => {
            this.copyCode(this.nzRawCode)
            this.message.info('代码已复制！');
            modal.destroy()
          }
        }
      ]
    });
  }
  /**
   * 清空
   */
  empty() {
    let len = this.dynamicComponents.length;
    while (len > 0) {
      this.dynamicComponents[len - 1].destroy()
      --len
      this.dynamicComponents.length = len
    }
  }
  /**
   * 属性改变
   * @param event 
   * @param type 属性类型
   */
  propertyChange(event: any, type: string) {
    switch (type) {
      case 'size':// 大小
        console.log(event)
        break;
      default:
        break;
    }
  }

  openCode(): void {
    this.visible = true;
    this.previewCodeDrawer.element.nativeElement.style.height = '0'
    console.dir(this.previewCodeDrawer.element.nativeElement, 'this.previewCodeDrawer.element.nativeElement')
  }

  closeCode(): void {
    this.visible = false;
  }

  @Input()
  get code(): string {
    return this.code1 || '';
  }

  set code(value: string) {
    this.code1 = decodeURIComponent(value).trim();
  }
  @Input()
  get nzRawCode(): string {
    this.rawCode = this.code1
    return this.rawCode;
  }

  set nzRawCode(value: string) {
    this.rawCode = decodeURIComponent(value).trim();
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

}
