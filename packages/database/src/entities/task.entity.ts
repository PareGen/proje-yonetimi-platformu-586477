import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import type { Project } from './project.entity';
import type { User } from './user.entity';

@Entity({ name: 'tasks' })
export class Task extends BaseEntity {
  @Column()
  title!: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ type: 'enum', enum: ['pending', 'in_progress', 'completed', 'on_hold'] })
  status!: 'pending' | 'in_progress' | 'completed' | 'on_hold';

  @Column({ type: 'enum', enum: ['low', 'medium', 'high'] })
  priority!: 'low' | 'medium' | 'high';


@Column({ name: 'project_id' })
  projectId!: string;

  @Index('idx_tasks_project_id')
  @ManyToOne('Project', 'tasks')
  @JoinColumn({ name: 'project_id' })
  project!: Project;

  @Column({ name: 'assignee_id' })
  assigneeId!: string;

  @Index('idx_tasks_assignee_id')
  @ManyToOne('User', 'tasks')
  @JoinColumn({ name: 'assignee_id' })
  user!: User;
}
