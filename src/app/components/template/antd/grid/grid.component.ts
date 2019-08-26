/*
 * @Author: luohong
 * @Date: 2019-08-12 09:09:29
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-14 17:23:25
 * @Description:
 * @email: 3300536651@qq.com
 */
import { Component, HostBinding, OnChanges, OnInit, ComponentFactoryResolver, ViewContainerRef, Renderer2, Type, NgModule, NgModuleFactory, Compiler, ComponentRef, HostListener, ViewChild, TemplateRef } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ShareService } from 'src/app/core/service/share.service';
type Bindings = {
  [key: string]: any;
};
export function structure() {
  let attributes = {
    title: {
      type: 'text',
      value: 'App Bar'
    },
    zDepth: {
      type: 'slider',
      value: 0,
      max: 5,
      min: 0,
      step: 1
    },
    titleClass: {
      type: 'text',
      value: ''
    }
  };
  let slots = {
    left: [],
    right: [],
    default: []
  }
  let template = `
  <div nz-row nzGutter="32">
    <div nz-col  nzSpan="12">
      <ng-container #firstContainer></ng-container>
    </div>
  </div>
  `
  return { template, attributes, slots }
}

@Component({
  selector: 'antd-grid-template',
  template: `
  <div class="drag-grid">
    <span class="row-mark">row</span>
    <div class="drag-grid-toolbar">
      <button nz-button nzType="dashed" nzSize="small" nz-tooltip nzTitle="拖动" class="drag-button"><i nz-icon
          nzType="drag"></i></button>
      <button nz-button nzType="dashed" nzSize="small" nz-tooltip nzTitle="删除" class="drag-button"><i nz-icon
          nzType="delete"></i></button>
    </div>
    ${structure().template}
  </div>
`,
  styles: [`
    .drag-grid {
      color: #dfa612;
      border: 2px solid #f2f4f5;
      padding: 30px 20px 20px;
      position: relative;
      margin: 10px;
      border-radius: 4px;
      background: #e8e8e8;
    }
    .row-mark {
      height: 22px;
      line-height: 22px;
      padding: 0 2px;
      background-color: rgb(190, 200, 200);
      color: #fff;
      position: absolute;
      left: 0;
      top: 0;
      border-bottom-right-radius: 2px;
    }
    .drag-grid .ant-row>div{
      padding: 40px 20px 20px;
      border-radius: 4px;
      position: relative;
      border: 1px solid rgb(190, 200, 200);
      background: #fff;
    }
    .drag-grid .ant-row>div::after{
      content: 'column';
      height: 22px;
      line-height: 22px;
      padding: 0 2px;
      background-color: rgb(190, 200, 200);
      color: #fff;
      position: absolute;
      left: 0;
      top: 0;
      border-bottom-right-radius: 2px;
    }
    .drag-grid-toolbar {
      position: absolute;
      right: 5px;
      top: 0px;
    }
    .drag-grid-toolbar button {
      margin-left: 10px;
    }
  `]
})
export class GridComponent implements OnInit, OnChanges {
  @HostBinding('id') id: string;
  
  @ViewChild('firstContainer', { read: ViewContainerRef, static: false }) firstContainerRef: ViewContainerRef;
  // 属性
  attributes: any
  // 拖拽事件
  @HostListener('drop', ['$event'])
  onDrop() {
    this.shareService.subject.next({
      eventName: 'grid1',
      param: { ref: this.firstContainerRef,id: this.id}
    });
  }
  constructor(
    private cfResolver: ComponentFactoryResolver,
    public vcRef: ViewContainerRef,
    private renderer: Renderer2,
    private compiler: Compiler,
    public shareService: ShareService,
  ) {
  }
  ngOnInit(): void {
    this.getAttributes(this.id)
    console.log(this.vcRef)

  }
  ngOnChanges(): void {
  }
  /**
   * 添加动态子组件
   * @param dynamicComponent 
   */
  // public appendChildComponent(dynamicComponent: Type<any>) {
  //   this.createComponentModule(dynamicComponent)
  //   // https://stackoverflow.com/questions/38093727/angular2-insert-a-dynamic-component-as-child-of-a-container-in-the-dom
  //   // this.compiler.compileModuleSync(this.createComponentModule(dynamicComponent));
  //   let factory = this.cfResolver.resolveComponentFactory(dynamicComponent);
  //   let componentRef = this.vcRef.createComponent(factory);
  //   // console.log(componentRef.injector.get(dynamicComponent).elRef.nativeElement,'componentRef.injector.get(dynamicComponent).elRef.nativeElement')
  //   // this.renderer.appendChild(
  //   //   this.vcRef.element.nativeElement,
  //   //   componentRef.injector.get(dynamicComponent).elRef.nativeElement
  //   //   // componentRef.location.nativeElement
  //   // );
  // }

  getAttributes(id: string) {
    let obj = localStorage.getItem('store')
    let template = structure().template
    return template
  }
  private createComponentModule(componentType: any): any {
    const runtimeComponentModule = NgModule({
      imports: [
        NgZorroAntdModule
      ],
      declarations: [
        componentType
      ],
      entryComponents: [componentType]
    })(class RuntimeComponentModule { });

    return runtimeComponentModule;

  }
  // createTemplate(template: string, bindings?: Bindings) {
  //   let dynamicComponent = Component({
  //     selector: 'dynamic-child-component',
  //     template: template
  //   })(class DynamicComponent implements OnInit {
  //     constructor() { }
  //     public ngOnInit() {
  //     }
  //   });
  //   return dynamicComponent;
  // }
}
