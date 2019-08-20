import { Component, OnInit, Output,Input ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@Output() public itemEvent=new EventEmitter();
@Output() public itemEvent1=new EventEmitter();
@Output() public itemEvent2=new EventEmitter();

 Itemsubmit1()
{
  this.itemEvent.emit("HeadPones");
  this.itemEvent1.emit("100");
  this.itemEvent2.emit("2");
}

Itemsubmit2()
{
  this.itemEvent.emit("HP PenDrive");
  this.itemEvent1.emit("500");
  this.itemEvent2.emit("4");
}

Itemsubmit3()
{
  this.itemEvent.emit("Mouse");
  this.itemEvent1.emit("1000");
  this.itemEvent2.emit("2");
}
}
