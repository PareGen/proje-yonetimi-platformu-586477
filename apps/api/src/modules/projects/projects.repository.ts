import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Project } from '@saas-template/database';
import type { CreateProjectDto, UpdateProjectDto } from '@saas-template/core';

@Injectable()
export class ProjectsRepository extends Repository<Project> {
  constructor(private dataSource: DataSource) {
    super(Project, dataSource.createEntityManager());
  }

  async findAll(userId: string): Promise<Project[]> {
    return this.find({
      where: { userId },
      order: { createdAt: 'DESC' },
    });
  }

  async findById(id: string, userId: string): Promise<Project | null> {
    return this.findOne({
      where: { id, userId },
    });
  }

  async create(userId: string, dto: CreateProjectDto): Promise<Project> {
    const project = this.create({
      ...dto,
      userId,
    });
    return this.save(project);
  }

  async update(id: string, userId: string, dto: UpdateProjectDto): Promise<Project | null> {
    const project = await this.findById(id, userId);
    if (!project) {
      return null;
    }

    Object.assign(project, dto);
    return this.save(project);
  }

  async remove(id: string, userId: string): Promise<boolean> {
    const project = await this.findById(id, userId);
    if (!project) {
      return false;
    }

    await this.softRemove(project);
    return true;
  }
}
