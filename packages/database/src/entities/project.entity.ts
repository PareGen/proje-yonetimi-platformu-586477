import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import type { User } from './user.entity';

@Entity({ name: 'projects' })
export class Project extends BaseEntity {
  @Column()
  name!: string;

  @Column({ nullable: true })
  description?: string;


@Column({ name: 'owner_id' })
  ownerId!: string;

  @Index('idx_projects_owner_id')
  @ManyToOne('User', 'projects')
  @JoinColumn({ name: 'owner_id' })
  user!: User;
}
