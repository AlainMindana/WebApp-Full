import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private ticketUrl = 'http://localhost:8081/webapp/ticket/';
  private ticketUrlWatchers = 'http://localhost:8081/webapp/ticket/watchers/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getTickets(): Observable<any> {
    return this.http.get<any>(this.ticketUrl);
  }

  addTicket(
    title: String,
    description: String,
    severity: any,
    status: any
  ): Observable<any> {
    return this.http.post<any>(
      this.ticketUrl,
      {
        title: title,
        description: description,
        severity: severity,
        status: status,
      },
      this.httpOptions
    );
  }

  updateTicket(
    ticket: any,
    title: String,
    description: String,
    severity: any,
    status: any
  ): Observable<any> {
    return this.http.put<any>(
      this.ticketUrl,
      {
        ticket: ticket,
        title: title,
        description: description,
        severity: severity,
        status: status,
      },
      this.httpOptions
    );
  }

  deleteTicket(ticket: any): Observable<any> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: {
        ticket: ticket,
      },
    };
    return this.http.delete<any>(this.ticketUrl, options);
  }

  assignWatchers(ticket: any, employeeNumber: any): Observable<any> {
    return this.http.put<any>(
      this.ticketUrlWatchers,
      {
        ticket: ticket,
        empNum: employeeNumber,
      },
      this.httpOptions
    );
  }
}
