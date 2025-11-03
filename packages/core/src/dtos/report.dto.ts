import { IsOptional, IsString, MinLength, IsBoolean, IsNumber, IsEnum, IsDate, IsUUID } from 'class-validator';

export class CreateReportDto {
  reportData!: Record<string, unknown>;

  @IsDate()
  generatedAt!: Date;

  @IsUUID()
  projectId!: string;
}

export class UpdateReportDto {
  @IsOptional()
  reportData?: Record<string, unknown> | undefined;

  @IsOptional()
  @IsDate()
  generatedAt?: Date | undefined;

  @IsOptional()
  @IsUUID()
  projectId?: string | undefined;
}

export class ReportResponseDto {
  id!: string;
  reportData!: Record<string, unknown>;
  generatedAt!: Date;
  projectId!: string;
  createdAt!: Date;
  updatedAt!: Date;
}
