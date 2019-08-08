import { Injectable } from '@angular/core';

/**
 * @description: 拖拽单例服务
 * @param {type} 
 * @return:  
 */
@Injectable()
export class DragService {
    private zone: string;
    data: any;
    /**
     * 开始拖拽动作
     * @param event 
     */
    dragstart_handler(event, handlerName): void {
        event.dataTransfer.setData(handlerName, null)
        return this.data = event
    }
    startDrag(zone: string) {
        this.zone = zone;
    }

    accepts(zone: string): boolean {
        return zone == this.zone;
    }
}