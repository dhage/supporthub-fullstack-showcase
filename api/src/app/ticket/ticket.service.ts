import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import {
  Ticket,
  TicketStatus,
} from '@supporthub-fullstack-showcase/shared-types';

@Injectable()
export class TicketService {
  private tickets: Ticket[] = [];

  create(createTicketDto: CreateTicketDto) {
    const ticket: Ticket = {
      id: crypto.randomUUID(),
      title: createTicketDto.title,
      description: createTicketDto.description,
      status: createTicketDto.status ?? TicketStatus.OPEN,
      createdAt: new Date(),
      createdById: createTicketDto.createdById,
    };

    this.tickets.push(ticket);

    return ticket;
  }

  findAll() {
    return this.tickets;
  }

  findOne(id: string) {
    return this.tickets.find((ticket) => ticket.id === id);
  }

  update(id: string, updateTicketDto: UpdateTicketDto) {
    return {
      id,
      ...updateTicketDto,
    };
  }

  remove(id: string) {
    this.tickets = this.tickets.filter((ticket) => ticket.id !== id);

    return {
      message: `Ticket ${id} deleted`,
    };
  }
}