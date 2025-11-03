import { api } from '@/lib/api';
import type { FileResponseDto, CreateFileDto, UpdateFileDto } from '@saas-template/core';

export const filesService = {
  async getAll(): Promise<FileResponseDto[]> {
    const response = await api.get('/files');
    return response.data;
  },

  async getById(id: string): Promise<FileResponseDto> {
    const response = await api.get(`/files/${id}`);
    return response.data;
  },

  async create(data: CreateFileDto): Promise<FileResponseDto> {
    const response = await api.post('/files', data);
    return response.data;
  },

  async update(id: string, data: UpdateFileDto): Promise<FileResponseDto> {
    const response = await api.put(`/files/${id}`, data);
    return response.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/files/${id}`);
  },
};
