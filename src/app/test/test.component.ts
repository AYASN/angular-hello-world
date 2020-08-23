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

    <h2 [style.color]="hasError ? 'red':'green'">{{"Welcome " + name + ", Style 1"}}</h2>
    <h2 [style.color]="highlightColor">{{"Welcome " + name + ", Style 2"}}</h2>
    <h2 [ngStyle]="titleStyles">{{"Welcome " + name + ", Style 3"}}</h2>

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
  public hasError = false;
  public isSpecial = true;
  public highlightColor = 'orange';
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  };
  public titleStyles = {
    color : 'blue',
    fontStyle : 'italic'
  }

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return 'Hello ' + this.name;
  }

}
