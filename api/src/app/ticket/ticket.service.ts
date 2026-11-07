import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TicketService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(createTicketDto: CreateTicketDto) {
    return this.prisma.ticket.create({
      data: createTicketDto,
    });
  }

  async findAll() {
    return this.prisma.ticket.findMany();
  }

  async findOne(id: string) {
    return this.prisma.ticket.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateTicketDto: UpdateTicketDto) {
    return this.prisma.ticket.update({
      where: {
        id,
      },
      data: updateTicketDto,
    });
  }

async remove(id: string) {
  return this.prisma.ticket.delete({
    where: {
      id,
    },
  });
}
}