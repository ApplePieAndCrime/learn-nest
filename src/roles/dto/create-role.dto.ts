import { ApiProperty } from "@nestjs/swagger"


export class CreateRoleDto  {
    @ApiProperty({example:'ADMIN',description:'уникальное значение роли'})
    readonly value: string

    @ApiProperty({example:'описание',description:'описание'})
    readonly description: string
}