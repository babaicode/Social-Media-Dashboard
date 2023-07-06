import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from 'src/user/user.entity';

@Entity()
export class Task {
  @PrimaryKey({ autoincrement: true })
  id: number;

  @Property()
  title: string;

  @Property()
  tag: string;

  @Property()
  description: string;

  @Property()
  socialMedia: string;

  @Property({ onCreate: () => new Date() })
  createdAt: Date;

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  updatedAt: Date;

  @ManyToOne(() => User)
  user: User;
}
