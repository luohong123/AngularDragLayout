import { Type, RendererFactory2 } from '@angular/core';

export class AdItemComponent {
  constructor(public component: Type<any>, public data: any, public rendererFactory2?: RendererFactory2) { }
}
