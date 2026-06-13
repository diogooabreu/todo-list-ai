import { IsEmail, IsString, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Provide a valid email address' })
  email: string;

  @IsString({ message: 'password must be a string' })
  @MinLength(8, { message: 'password must be at least 8 characters' })
  @Matches(/(?=.*[A-Z])(?=.*\d)/, {
    message:
      'password must contain at least one uppercase letter and one number',
  })
  password: string;
}
