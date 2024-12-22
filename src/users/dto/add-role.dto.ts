import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({ example: '1', description: 'id пользователя' })
  @IsNumber()
  readonly userId: number;
  @ApiProperty({ example: 'ADMIN', description: 'роль' })
  @IsString()
  readonly value: string;
}
