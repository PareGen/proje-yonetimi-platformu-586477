import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import type { Project } from './project.entity';

@Entity({ name: 'reports' })
export class Report extends BaseEntity {
  @Column({ type: 'jsonb', name: 'report_data' })
  reportData!: Record<string, unknown>;

  @Column({ type: 'timestamp with time zone', name: 'generated_at' })
  generatedAt!: Date;


@Column({ name: 'project_id' })
  projectId!: string;

  @Index('idx_reports_project_id')
  @ManyToOne('Project', 'reports')
  @JoinColumn({ name: 'project_id' })
  project!: Project;
}
