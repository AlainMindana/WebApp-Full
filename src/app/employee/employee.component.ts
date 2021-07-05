import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employees: any = [];
  isButtonTitleClicked: any = [];
  isLoggedIn = false;

  constructor(
    private employeeService: EmployeeService,
    private auth: AuthService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isUserLoggedIn();
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

  delete(deleteEmp: any): void {
    this.employeeService.deleteEmployee(deleteEmp).subscribe();
    alert('Employee #' + deleteEmp + ' has been deleted!');
    window.location.reload();
  }

  assignTicket(ticket: any, employeeNumber: any): void {
    this.employeeService.assignTicket(ticket, employeeNumber).subscribe();
    alert(
      'Employee #' + employeeNumber + ' has been assigned to Ticket ' + ticket
    );
    window.location.reload();
  }

  public toggle(i: number): void {
    this.isButtonTitleClicked[i] = true;
  }

  isClicked: any = [];

  public toggleAssign(i: number): void {
    this.isClicked[i] = true;
  }

  logout() {
    this.auth.logout();
    alert('LOGOUT SUCCESSFUL');
  }

  // close(){
  //   document.getElementsByClassName(
  //     "updateContainer").style.display = 'none'
  // }
}
