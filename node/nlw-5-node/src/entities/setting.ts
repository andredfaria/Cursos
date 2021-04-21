import { Entity,Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid, v4 } from "uuid";

@Entity('settings')
class Setting {
  constructor(parameters) {
    if (!this.id)
      this.id = uuid();
    
  }

  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  chat: boolean;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;
}

export{Setting}