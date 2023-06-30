import { Entity, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Task } from 'src/task/task.entity';

@Entity()
export class User {
  @PrimaryKey({ autoincrement: true })
  id: number;

  @Property()
  password: string;

  @Property({ onCreate: () => new Date() })
  createdAt: Date;

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  updatedAt: Date;

  @Property({ unique: true })
  email: string;

  @Property()
  firstName: string;

  @Property()
  lastName: string;

  @Property()
  enabled = true;

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @OneToOne(() => Task, (task) => task.user, {
    nullable: true,
    owner: true,
  })
  task: Task | null;
}
