import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({
    example: 'Please restart the printer service.',
  })
  @IsString()
  @IsNotEmpty()
  content!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  ticketId!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  authorId!: string;
}