import type { CreateFileDto, UpdateFileDto } from '@saas-template/core';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { filesService } from '../services';

const FILE_KEY = ['files'];

export function useFiles() {
  return useQuery({
    queryKey: FILE_KEY,
    queryFn: () => filesService.getAll(),
  });
}

export function useFile(id: string) {
  return useQuery({
    queryKey: [...FILE_KEY, id],
    queryFn: () => filesService.getById(id),
    enabled: !!id,
  });
}

export function useCreateFile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateFileDto) => filesService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FILE_KEY });
    },
  });
}

export function useUpdateFile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateFileDto }) =>
      filesService.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FILE_KEY });
    },
  });
}

export function useDeleteFile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => filesService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FILE_KEY });
    },
  });
}
