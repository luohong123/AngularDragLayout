/*
 * @Author: luohong
 * @Date: 2019-08-08 14:52:47
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-09 14:13:16
 * @Description: 
 * @email: 3300536651@qq.com
 */
import { Component } from '@angular/core';
export let buttonTempalte = `
<button nz-button nzType="primary">Primary</button>
`
@Component({
  selector: 'antd-button',
  template: buttonTempalte,
  styles: [`
  
  `]
})
export class AntdbuttonComponent {
}
