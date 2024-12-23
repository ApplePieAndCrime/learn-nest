import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ example: 'заголовок', description: 'заголовок' })
  readonly title: string;
  @ApiProperty({ example: 'описание', description: 'описание' })
  readonly content: string;
  @ApiProperty({ example: '1', description: 'id пользователя' })
  readonly userId: number;
}
