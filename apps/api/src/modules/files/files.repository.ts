import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { File } from '@saas-template/database';
import type { CreateFileDto, UpdateFileDto } from '@saas-template/core';

@Injectable()
export class FilesRepository extends Repository<File> {
  constructor(private dataSource: DataSource) {
    super(File, dataSource.createEntityManager());
  }

  async findAll(userId: string): Promise<File[]> {
    return this.find({
      where: { userId },
      order: { createdAt: 'DESC' },
    });
  }

  async findById(id: string, userId: string): Promise<File | null> {
    return this.findOne({
      where: { id, userId },
    });
  }

  async create(userId: string, dto: CreateFileDto): Promise<File> {
    const file = this.create({
      ...dto,
      userId,
    });
    return this.save(file);
  }

  async update(id: string, userId: string, dto: UpdateFileDto): Promise<File | null> {
    const file = await this.findById(id, userId);
    if (!file) {
      return null;
    }

    Object.assign(file, dto);
    return this.save(file);
  }

  async remove(id: string, userId: string): Promise<boolean> {
    const file = await this.findById(id, userId);
    if (!file) {
      return false;
    }

    await this.softRemove(file);
    return true;
  }
}
