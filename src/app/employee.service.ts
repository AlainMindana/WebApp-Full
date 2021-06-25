import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeeUrl = 'http://localhost:8081/webapp/employee/';
  // employeeUrl for GET(display all) and POST(create an employee) and PUT(update an employee) and DELETE(an employee)
  private employeeUrlAssign =
    'http://localhost:8081/webapp/employee/assignTicket/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get<any>(this.employeeUrl);
  }

  addEmployee(
    empNum: any,
    fname: String,
    mname: String,
    lname: String,
    dept: String
  ): Observable<any> {
    return this.http.post<any>(
      this.employeeUrl,
      {
        employeeNumber: empNum,
        firstName: fname,
        middleName: mname,
        lastName: lname,
        department: dept,
      },
      this.httpOptions
    );
  }

  updateEmployee(
    empNum: any,
    fname: String,
    mname: String,
    lname: String,
    dept: String
  ): Observable<any> {
    return this.http.put<any>(
      this.employeeUrl,
      {
        employeeNumber: empNum,
        firstName: fname,
        middleName: mname,
        lastName: lname,
        department: dept,
      },
      this.httpOptions
    );
  }

  deleteEmployee(empNum: any): Observable<any> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: {
        employeeNumber: empNum,
      },
    };

    return this.http.delete<any>(this.employeeUrl, options);
  }

  assignTicket(ticket: any, employeeNumber: any): Observable<any> {
    return this.http.put<any>(
      this.employeeUrlAssign,
      {
        ticket: ticket,
        employeeNumber: employeeNumber,
      },
      this.httpOptions
    );
  }
}
