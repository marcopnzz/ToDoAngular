import { Component } from '@angular/core';
import { ActionToDo } from './model/action';
import { ToDoServiceService } from './to-do-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do';
  list: Array<ActionToDo> = []
  setList(test: Array<ActionToDo>) {
    this.list = test
    console.log("Lista ricevuta", this.list)
  }
}
