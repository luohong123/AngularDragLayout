
import { Antui } from './antd-ui/antui'
import { Injectable } from '@angular/core';
@Injectable()
export class ComponentService {
    static getTemplate() {
        console.log(Antui.obj['antd-button'], 'Antui.obj')
        console.log(Antui.obj['antd-button'])
    }
}
