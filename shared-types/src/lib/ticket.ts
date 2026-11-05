import { TicketStatus } from './enums/ticket-status';

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  createdAt: Date;
}