import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActionToDo } from 'src/app/model/action';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  @Input() act: ActionToDo
  @Input() index: number
  @Output() indexToRemove = new EventEmitter()
  url: string
  constructor() {
    this.index = null;
    this.closeTrash()
  }

  ngOnInit() {
  }

  setDone() {
    this.act.setState(true)
  }
  remove(index: number) {
    this.openTrash()
    this.indexToRemove.emit(index)
  }

  openTrash() {
    this.url = "../../../assets/trash_open.svg"
  }

  closeTrash() {
    this.url = "../../../assets/trash.svg"
  }

}
