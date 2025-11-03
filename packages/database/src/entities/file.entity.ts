import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import type { Project } from './project.entity';

@Entity({ name: 'files' })
export class File extends BaseEntity {
  @Column({ name: 'file_name' })
  fileName!: string;

  @Column({ name: 'file_path' })
  filePath!: string;

  @Column({ type: 'timestamp with time zone', name: 'uploaded_at' })
  uploadedAt!: Date;


@Column({ name: 'project_id' })
  projectId!: string;

  @Index('idx_files_project_id')
  @ManyToOne('Project', 'files')
  @JoinColumn({ name: 'project_id' })
  project!: Project;
}
