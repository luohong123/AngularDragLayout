/*
 * @Author: luohong
 * @Date: 2019-08-12 09:09:29
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-14 11:21:00
 * @Description: 
 * @email: 3300536651@qq.com
 */
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class ShareService {
    subject: Subject<{ eventName: string; param: any }> = new Subject<{ eventName: string; param: any }>();
}

