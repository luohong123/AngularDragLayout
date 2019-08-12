/*
 * @Author: luohong
 * @Date: 2019-08-12 09:09:29
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-12 10:04:03
 * @Description: 
 * @email: 3300536651@qq.com
 */
import { Injectable } from '@angular/core'

@Injectable()
export class StoreService {
state = {
        css: '',
        uitype: 'antd-ui', // ui类型
        selectedComponent: {}, // 选中组件
        components: [], // 预览组件
        backupComponents: [], // 备份组件
        copiedComponents: []// 复制组件
    }
}
