import { TicketStatus } from '@supporthub-fullstack-showcase/shared-types';

export class CreateTicketDto {
  title!: string;
  description!: string;
  status!: TicketStatus;
  createdById!: string;
}