import { randomUUID } from 'crypto';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  CreateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @Column()
  email: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @BeforeInsert() // BeforeInsert é um decorator que faz com que o método generetedId seja executado antes de um curso ser inserido no banco de dados
  generetedId() {
    if (this.id) {
      return;
    }
    this.id = randomUUID();
  }
}
