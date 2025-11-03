'use client';

import { useFiles } from '@/features/files/hooks/use-files';

export default function FileStoragePage() {
  const { data: files, isLoading } = useFiles();

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">File Storage</h1>
      <p className="text-muted-foreground mb-6">Manage files related to projects and tasks.</p>
      
      <div className="grid gap-4">
        {files?.map((file: any) => (
          <div key={file.id} className="border rounded p-4">
            <pre>{JSON.stringify(file, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}
