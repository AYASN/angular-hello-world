import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

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

  public employees = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees()
        .subscribe(data => this.employees = data);
  }
}
