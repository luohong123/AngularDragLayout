/*
 * @Author: luohong
 * @Date: 2019-08-12 09:09:29
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-12 16:56:37
 * @Description: 
 * @email: 3300536651@qq.com
 */
import { Component, OnInit, HostBinding, OnChanges, ElementRef, ViewRef, ɵComponentDef, ViewContainerRef, Input, ViewChild, TemplateRef, AfterViewInit, Renderer2, ComponentFactoryResolver, NgModule, NgModuleFactory, Compiler } from '@angular/core';
import { TemplateAst, TemplateBindingParseResult, TemplateParser } from '@angular/compiler';
import { DomSanitizer } from '@angular/platform-browser';
import { NgZorroAntdModule } from 'ng-zorro-antd';


type Bindings = {
  [key: string]: any;
};
@Component({
  selector: 'drag-grid',
  template: ` 
   <div>
   <ng-container *ngComponentOutlet="dynamicComponent; ngModuleFactory: dynamicModule;">
  </ng-container>
   </div>
    `,
  styles: [`
  
  `]
})
export class PreviewComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('previewTemplate', { read: ViewContainerRef, static: false }) previewTemplate: ViewContainerRef
  public dynamicComponent: any;
  public dynamicModule: NgModuleFactory<any>;
  @Input()
  code: any
  @Input()
  public bindings: Bindings = {};
  constructor(private renderer: Renderer2, private compiler: Compiler,
    private sanitizer: DomSanitizer, public resolver: ComponentFactoryResolver) {
  }
  ngOnInit(): void {
    console.log(typeof this.code, 'code类型')
    this.loadDynamicContent()
  }
  ngOnChanges(): void {

  }


  ngAfterViewInit() {

  }

  private loadDynamicContent(): void {

    this.dynamicComponent = this.createTemplate(this.code, this.bindings);
    this.dynamicModule = this.compiler.compileModuleSync(this.createComponentModule(this.dynamicComponent));

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
  createTemplate(template: string, bindings: Bindings) {
    let dynamicComponent = Component({
      selector: 'app-dynamic-component',
      template: template
    })(class DynamicComponent implements OnInit {
      constructor() { }
      public ngOnInit() {
      }
    });
    return dynamicComponent;
  }
}