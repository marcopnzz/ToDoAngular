import { Component, Input, OnInit } from '@angular/core';
import { ActionToDo } from 'src/app/model/action';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: Array<ActionToDo>
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
  }

  removeRow(index: number) {
    this.list.splice(index, 1)
  }

}
