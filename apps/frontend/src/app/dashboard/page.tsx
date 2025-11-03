'use client';

import { useProjects } from '@/features/projects/hooks/use-projects';

export default function DashboardPage() {
  const { data: projects, isLoading } = useProjects();

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p className="text-muted-foreground mb-6">Overview of projects, tasks, and user activity.</p>
      
      <div className="grid gap-4">
        {projects?.map((project: any) => (
          <div key={project.id} className="border rounded p-4">
            <pre>{JSON.stringify(project, null, 2)}</pre>
          </div>
        ))}
      </div>
    </div>
  );
}
