import { Component, OnInit } from '@angular/core';
import { Log } from '../../models/Log';
import {LogService} from '../../services/log.service';



@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
id:string;
text:string;
date:any;
isNew:boolean=true;
constructor(private logservise:LogService) { }

  ngOnInit() {
    this.logservise.selectedLog.subscribe(log=>{
      if(log.id !== null){
        this.isNew=false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    })
  }
onSubmit(){
  if(this.isNew){
    const newLog ={
      id:this.uuid(),
      text:this.text,
      date:new Date()
    }
    this.logservise.addLog(newLog);  
    }else{
      const updateLog={
        id:this.id,
        text:this.text,
        date:new Date()
      }
      this.logservise.updateLog(updateLog);
    }
  }
 uuid(){
  return Math.floor((Math.random() * 1000)).toString();
}
  
}
