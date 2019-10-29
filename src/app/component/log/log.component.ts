import { Component, OnInit } from '@angular/core';
import { Log } from '../../models/Log';
import {LogService} from '../../services/log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
logs:Log[];

  constructor(private logservise:LogService) { }

  ngOnInit() {
   this.logs = this.logservise.getlog();
  }
  removelog(log){
    console.log(log);
  }
  selectlog(log:Log){
    this.logservise.setFormLog(log);
    //console.log(log);
  }

}
