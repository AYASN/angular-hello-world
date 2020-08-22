import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2 class="text-success">
      Welcome {{name}}
    </h2>
    <h2 [class] = "successClass">{{2+5}}</h2>
    <h3 class="text-special" [class] = "successClass">{{siteUrl}}</h3>
    <h2 [class.text-danger]="hasError"></h2>
    <h2 [ngClass]="messageClasses" >Object of Classes example</h2>

    <h2>{{"Welcome " + name}}</h2>
    {{name.length}}
    {{name.toUpperCase()}}
    {{greetUser()}}<br>
    <input [id]="myId" type="text" value="Angular">
    <input id="{{myId}}" [disabled]="isDisabled" type="text" value="Angular">
    <input id="{{myId}}" bind-disabled="isDisabled" type="text" value="Angular">
  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color : red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = 'User';
  public myId = 'testId';
  public isDisabled = true;
  public siteUrl = window.location.href;

  public successClass = 'text-success';
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    'test-success': !this.hasError,
    'test-danger': this.hasError,
    'test-special': this.isSpecial
  };

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return 'Hello ' + this.name;
  }

}
