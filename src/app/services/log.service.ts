import { Injectable, ɵConsole } from '@angular/core';
import { Log } from '../models/Log';
import {BehaviorSubject} from 'rxjs';
import {Observable} from 'rxjs';
import{of} from 'rxjs';
import { Logs } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class LogService {
private logSource = new BehaviorSubject<Log>({id:null,text:null,date:null});
selectedLog= this.logSource.asObservable();
logs:Log[];
  constructor() { 
    this.logs=[
      {id:'1',text:'id component', date: new Date('12/12/2019 23:27:33')},
      {id:'1',text:'text component', date: new Date('12/12/2019 23:27:33')},
      {id:'1',text:'date component', date: new Date('12/12/2019 23:27:33')}
      ]
  }
  getlog(){
    return this.logs;
  }
  setFormLog(log:Log){
  this.logSource.next(log);
  }
  addLog(log:Log){
    this.logs.unshift(log);
  }
  updateLog(log:Log){
    console.log(log);
    this.logs.forEach((curr,index)=>{
      if(log.id===curr.id){
        this.logs.splice(index,1);
      }
    })
    this.logs.unshift(log);
  }
  deleteLog(log:Log){
    console.log(log);
    this.logs.forEach((curr,index)=>{
      if(log.id===curr.id){
        this.logs.splice(index,1);
      }
    })
  }
}
