import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @IsString({ message: 'title must be a string' })
  title?: string;

  @IsOptional()
  @IsString({ message: 'description must be a string' })
  description?: string;

  @IsOptional()
  @IsBoolean({ message: 'completed must be a boolean' })
  completed?: boolean;

  @IsOptional()
  @IsString({ message: 'categoryId must be a string' })
  categoryId?: string;
}
