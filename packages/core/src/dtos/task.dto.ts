import { IsOptional, IsString, MinLength, IsBoolean, IsNumber, IsEnum, IsDate, IsUUID } from 'class-validator';

export enum TaskStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  ON_HOLD = 'on_hold'
}

export enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
}

export class CreateTaskDto {
  @IsString()
  @MinLength(1)
  title!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(TaskStatus)
  status!: TaskStatus;

  @IsEnum(TaskPriority)
  priority!: TaskPriority;

  @IsUUID()
  projectId!: string;

  @IsOptional()
  @IsUUID()
  assigneeId?: string;
}

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  title?: string | undefined;

  @IsOptional()
  @IsOptional()
  @IsString()
  description?: string | undefined;

  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus | undefined;

  @IsOptional()
  @IsEnum(TaskPriority)
  priority?: TaskPriority | undefined;

  @IsOptional()
  @IsUUID()
  projectId?: string | undefined;

  @IsOptional()
  @IsOptional()
  @IsUUID()
  assigneeId?: string | undefined;
}

export class TaskResponseDto {
  id!: string;
  title!: string;
  description?: string;
  status!: TaskStatus;
  priority!: TaskPriority;
  projectId!: string;
  assigneeId?: string;
  createdAt!: Date;
  updatedAt!: Date;
}
