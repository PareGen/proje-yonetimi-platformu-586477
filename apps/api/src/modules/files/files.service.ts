import { UnitOfWork } from '@/core/database/unit-of-work.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import type { CreateFileDto, FileResponseDto, UpdateFileDto } from '@saas-template/core';
import type { File } from '@saas-template/database';
import { FilesRepository } from './files.repository';

@Injectable()
export class FilesService {
  constructor(
    private readonly filesRepository: FilesRepository,
    private readonly uow: UnitOfWork
  ) {}

  async findAll(userId: string): Promise<FileResponseDto[]> {
    const files = await this.filesRepository.findAll(userId);
    return files.map((file: File) => this.toResponseDto(file));
  }

  async findOne(id: string, userId: string): Promise<FileResponseDto> {
    const file = await this.filesRepository.findById(id, userId);
    if (!file) {
      throw new NotFoundException('File not found');
    }
    return this.toResponseDto(file);
  }

  async create(userId: string, dto: CreateFileDto): Promise<FileResponseDto> {
    return this.uow.execute(async () => {
      const file = await this.filesRepository.create(userId, dto);
      return this.toResponseDto(file);
    });
  }

  async update(id: string, userId: string, dto: UpdateFileDto): Promise<FileResponseDto> {
    return this.uow.execute(async () => {
      const file = await this.filesRepository.update(id, userId, dto);
      if (!file) {
        throw new NotFoundException('File not found');
      }
      return this.toResponseDto(file);
    });
  }

  async remove(id: string, userId: string): Promise<void> {
    return this.uow.execute(async () => {
      const deleted = await this.filesRepository.remove(id, userId);
      if (!deleted) {
        throw new NotFoundException('File not found');
      }
    });
  }

  private toResponseDto(file: File): FileResponseDto {
    return {
      id: file.id,
      fileName: file.fileName,
      filePath: file.filePath,
      uploadedAt: file.uploadedAt,
      projectId: file.projectId,
      createdAt: file.createdAt,
      updatedAt: file.updatedAt,
    };
  }
}
