import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `

<!--    <h2>{{"Hello " + parentData}}</h2>-->
    <h2>{{"Hello " + name}}</h2>
    <button (click)="fireEvent()">Send event to parent component</button>

  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // @Input() public parentData;

  // or we can use alias
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent() {
    this.childEvent.emit('Hey codeval');
  }
}
