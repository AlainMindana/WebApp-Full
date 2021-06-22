import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeeUrl = 'http://localhost:8081/webapp/employee/';
  // employeeUrl for GET(display all) and POST(create an employee) and PUT(update an employee)

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
}
