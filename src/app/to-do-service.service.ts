import { Injectable } from '@angular/core';
import { ActionToDo } from './model/action';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {
  private list: Array<ActionToDo>

  constructor() {
    this.list = []
  }

  public add(act: ActionToDo) {
    this.list.push(act)
  }

  public remove(act: ActionToDo) {
    this.list.splice(this.list.indexOf(act), 1)
  }

  public change(act: ActionToDo) {
    var new_act = act
    if (new_act.isState() == true) {
      new_act.setState(false)
    } else {
      new_act.setState(true)
    }
    this.list.splice(this.list.indexOf(act), 1, new_act)
  }
  public get(): Array<ActionToDo> {
    return this.list
  }
}
