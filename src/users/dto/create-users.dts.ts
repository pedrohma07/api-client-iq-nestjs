import { IsString, IsInt } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly password: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly email: string;
}
