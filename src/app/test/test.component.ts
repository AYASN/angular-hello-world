import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <h2>{{2+5}}</h2>
    <h2>{{"Welcome " + name}}</h2>
    {{name.length}}
    {{name.toUpperCase()}}
    {{greetUser()}}<br>
    <h3>{{siteUrl}}</h3>
    <input [id]="myId" type="text" value="Angular">
    <input id="{{myId}}" [disabled]="isDisabled" type="text" value="Angular">
    <input id="{{myId}}" bind-disabled="isDisabled" type="text" value="Angular">
  `,
  styleUrls: []
})
export class TestComponent implements OnInit {

  public name = 'User';
  public myId = 'testId';
  public isDisabled = true;
  public siteUrl = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return 'Hello ' + this.name;
  }

}
