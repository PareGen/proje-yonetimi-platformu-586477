import { IsOptional, IsString, MinLength, IsBoolean, IsNumber, IsEnum, IsDate, IsUUID } from 'class-validator';

export class CreateFileDto {
  @IsString()
  @MinLength(1)
  fileName!: string;

  @IsString()
  @MinLength(1)
  filePath!: string;

  @IsDate()
  uploadedAt!: Date;

  @IsUUID()
  projectId!: string;
}

export class UpdateFileDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  fileName?: string | undefined;

  @IsOptional()
  @IsString()
  @MinLength(1)
  filePath?: string | undefined;

  @IsOptional()
  @IsDate()
  uploadedAt?: Date | undefined;

  @IsOptional()
  @IsUUID()
  projectId?: string | undefined;
}

export class FileResponseDto {
  id!: string;
  fileName!: string;
  filePath!: string;
  uploadedAt!: Date;
  projectId!: string;
  createdAt!: Date;
  updatedAt!: Date;
}
