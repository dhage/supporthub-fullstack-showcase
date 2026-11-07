import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import {
  Ticket,
  TicketStatus,
} from '@supporthub-fullstack-showcase/shared-types';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TicketService {
  private tickets: Ticket[] = [];
  constructor(
    private readonly prisma: PrismaService,
  ) {}

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

  async findAll() {
    return this.prisma.ticket.findMany();
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