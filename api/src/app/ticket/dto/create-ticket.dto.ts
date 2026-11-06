import { TicketStatus } from '@supporthub-fullstack-showcase/shared-types';
import {
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateTicketDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsEnum(TicketStatus)
  status!: TicketStatus;

  @IsString()
  @IsNotEmpty()
  createdById!: string;
}