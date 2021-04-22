import { Entity,Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid, v4 } from "uuid";

@Entity('users')
class User {
  constructor(parameters) {
    if (!this.id)
      this.id = uuid();
    
  }

  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;
}

export { User }