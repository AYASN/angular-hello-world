import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2>
      <ul *ngFor="let employee of employees">
        <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
      </ul>
    </h2>`,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees()
      .subscribe(data => {
        console.log("Data : ",data);
        this.employees = data
      });
  }
}
