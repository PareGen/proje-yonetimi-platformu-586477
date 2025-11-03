import { api } from '@/lib/api';
import type { ProjectResponseDto, CreateProjectDto, UpdateProjectDto } from '@saas-template/core';

export const projectsService = {
  async getAll(): Promise<ProjectResponseDto[]> {
    const response = await api.get('/projects');
    return response.data;
  },

  async getById(id: string): Promise<ProjectResponseDto> {
    const response = await api.get(`/projects/${id}`);
    return response.data;
  },

  async create(data: CreateProjectDto): Promise<ProjectResponseDto> {
    const response = await api.post('/projects', data);
    return response.data;
  },

  async update(id: string, data: UpdateProjectDto): Promise<ProjectResponseDto> {
    const response = await api.put(`/projects/${id}`, data);
    return response.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/projects/${id}`);
  },
};
