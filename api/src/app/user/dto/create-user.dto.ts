import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'max.mustermann@example.com',
  })
  @IsEmail()
  email!: string;
}