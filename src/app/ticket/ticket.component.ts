import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent implements OnInit {
  tickets: any = [];
  isClicked: any = [];
  constructor(
    private ticketService: TicketService,
    private location: Location,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(): void {
    this.ticketService
      .getTickets()
      .subscribe((tickets) => (this.tickets = tickets));
  }

  addTicket(
    title: String,
    description: String,
    severity: any,
    status: any
  ): void {
    this.ticketService
      .addTicket(title, description, severity, status)
      .subscribe((data) => {
        this.tickets.push(data);
      });
    alert('Ticket has been successfully added!');
  }

  updateTicket(
    ticket: any,

    title: String,
    description: String,
    severity: any,
    status: any
  ): void {
    this.ticketService
      .updateTicket(ticket, title, description, severity, status)
      .subscribe();
    alert('Ticket has been successfully added!');
    window.location.reload();
  }

  deleteTicket(ticket: any): void {
    this.ticketService.deleteTicket(ticket).subscribe();
    alert('Ticket' + ticket + ' has been deleted!');
    window.location.reload();
  }

  assignWatchers(ticket: any, employeeNumber: any): void {
    this.ticketService.assignWatchers(ticket, employeeNumber).subscribe();
    alert('Employee has been assigned to ticket ' + ticket + ' as a watcher');
    window.location.reload();
  }

  public toggleUpdate(i: number): void {
    this.isClicked[i] = true;
  }

  isClickedAssign: any = [];
  public toggleAssign(i: number): void {
    this.isClickedAssign[i] = true;
  }

  logout() {
    this.auth.logout();
    alert('LOGOUT SUCCESSFUL');
  }
}
