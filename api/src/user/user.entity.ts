import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

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
}
