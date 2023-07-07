import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Role } from '../constants';

@Entity()
export class UserEntity extends BaseEntity {
  @Column({
    type: 'text',
    charset: 'utf8mb4',
    collation: 'utf8mb4_unicode_ci',
    nullable: true,
  })
  fullname: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  phoneNumber: string;

  @Column({
    type: 'text',
    charset: 'utf8mb4',
    collation: 'utf8mb4_unicode_ci',
    nullable: true,
  })
  address: string;

  @Column()
  birthDate: string;

  @Column({ default: 'male' })
  gender: string;

  @Column()
  avatar: string;

  @Column({ default: Role.User })
  role: string;

  @Column({ default: null })
  token: string;
}
