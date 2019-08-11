import { Injectable } from '@angular/core'

@Injectable()
export class StoreService {
    static state = {
        width: [{
            attr: '15',
            preview: '70',
            components: '15'
        }, {
            attr: '20',
            preview: '60',
            components: '20'
        }, {
            attr: '25',
            preview: '50',
            components: '25'
        }],
        css: '', // 用户编辑的自定义css字符串
        activeUI: 'Muse-UI',
        currentComponent: {}, // 预览视图的选中组件
        components: [], // 预览视图的组件树
        backupComponents: [], // 删除组件时备份的
        copiedComponents: []// 复制的组件
    }
}
