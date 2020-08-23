import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>
      <ul *ngFor="let employee of employees">
        <li>{{employee.name}}</li>
      </ul>
    </h2>`,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees = [
    {id : 1, name : 'Andrew', age: 30},
    {id : 2, name : 'Brandon', age: 25},
    {id : 3, name : 'John', age: 35},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
