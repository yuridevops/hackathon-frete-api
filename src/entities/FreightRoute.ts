import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm'
import person from './Person'

@Entity()
export default class freight_route {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'integer' })
  person_id: number

  @Column({ type: 'boolean' })
  received: boolean

  @Column()
  origin: string

  @Column()
  destiny: string

  @Column({ type: 'date' })
  origin_date: Date

  @Column({ type: 'date' })
  destiny_date: Date

  @Column({ type: 'decimal' })
  negotiated_amount: number

  @Column({ type: 'decimal' })
  advance_amount: number

  @Column({ type: 'decimal' })
  received_amount: number

  @ManyToOne(() => person)
  @JoinColumn({ name: 'person_id' })
  person: person

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
