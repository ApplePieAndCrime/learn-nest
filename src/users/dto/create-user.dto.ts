import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@email', description: 'email' })
  readonly email: string;

  @ApiProperty({ example: 'password', description: 'пароль' })
  readonly password: string;
}
