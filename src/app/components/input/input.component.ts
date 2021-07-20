import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActionToDo } from 'src/app/model/action';
import { ToDoServiceService } from 'src/app/to-do-service.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() event = new EventEmitter();
  constructor(private serviceList: ToDoServiceService) { }

  ngOnInit() {
  }

  add(desc: string) {
    var act = new ActionToDo(desc)
    console.log("Singolo inserimento", act)
    this.serviceList.add(act)
    this.event.emit(this.serviceList.get());
    //console.log(this.serviceList.get())
  }


}
