import { IsOptional, IsString, MinLength, IsBoolean, IsNumber, IsEnum, IsDate, IsUUID } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @MinLength(1)
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsUUID()
  ownerId!: string;
}

export class UpdateProjectDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  name?: string | undefined;

  @IsOptional()
  @IsOptional()
  @IsString()
  description?: string | undefined;

  @IsOptional()
  @IsUUID()
  ownerId?: string | undefined;
}

export class ProjectResponseDto {
  id!: string;
  name!: string;
  description?: string;
  ownerId!: string;
  createdAt!: Date;
  updatedAt!: Date;
}
