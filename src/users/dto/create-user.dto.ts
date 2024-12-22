import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@email.com', description: 'email' })
  @IsEmail({}, { message: 'Некорректный email' })
  readonly email: string;

  @ApiProperty({ example: 'password', description: 'пароль' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 10, { message: 'Не меньше 4 и не больше 10' })
  readonly password: string;
}
