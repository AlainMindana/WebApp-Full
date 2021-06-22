import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employees: any = [];

  constructor(
    private employeeService: EmployeeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService
      .getEmployees()
      .subscribe((employees) => (this.employees = employees));
  }

  addEmployee(
    empNum: any,
    fname: String,
    mname: string,
    lname: string,
    dept: string
  ): void {
    this.employeeService
      .addEmployee(empNum, fname, mname, lname, dept)
      .subscribe((data) => {
        this.employees.push(data);
      });
    alert('Employee #' + empNum + ' succesfulyy added!');
  }

  save(
    updateEmp: any,
    updateFname: String,
    updateMidname: string,
    udpateLname: string,
    updateDept: string
  ): void {
    this.employeeService
      .updateEmployee(
        updateEmp,
        updateFname,
        updateMidname,
        udpateLname,
        updateDept
      )
      .subscribe();
    alert('Employee #' + updateEmp + ' has been updated!');
    window.location.reload();
  }
}
