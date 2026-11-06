import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { TicketStatus } from '@supporthub-fullstack-showcase/shared-types';

export class CreateTicketDto {
  @ApiProperty({
    example: 'Printer not working',
  })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiProperty({
    example: 'User cannot print documents',
  })
  @IsString()
  @IsNotEmpty()
  description!: string;

  @ApiProperty({
    enum: TicketStatus,
    example: TicketStatus.OPEN,
  })
  @IsEnum(TicketStatus)
  status!: TicketStatus;

  @ApiProperty({
    example: 'user-123',
  })
  @IsString()
  @IsNotEmpty()
  createdById!: string;
}