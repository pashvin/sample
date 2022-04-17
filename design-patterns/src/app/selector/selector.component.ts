import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {

  private selectionList = [
    "Adapter",
    "Singleton",
    "Bridge",
    "Factory"
  ];

  constructor() { }

  ngOnInit(): void {
  }

  get getList():string[] {
    return this.selectionList;
  }

}
