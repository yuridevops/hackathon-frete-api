import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import person from './Person'

@Entity()
export default class freight_register {
  @PrimaryGeneratedColumn()
  id: number

  @Column('integer')
  person_id: number

  @Column({ type: 'decimal' })
  capacity: number

  @Column({ type: 'decimal' })
  body_type: number

  @Column({ type: 'decimal' })
  type_name: number

  @Column({ type: 'decimal' })
  category: number

  @Column({ type: 'decimal' })
  is_articulated: number

  @Column({ type: 'decimal' })
  capacity_measurement_unit: number

  @Column({ type: 'decimal' })
  localizador: number

  @Column({ type: 'decimal' })
  tracker: number

  @Column({ type: 'decimal' })
  Carroceria: number

  @Column({ type: 'decimal' })
  permissionado: number

  @Column({ type: 'decimal' })
  lat: number

  @Column({ type: 'decimal' })
  lng: number

  @Column({ type: 'decimal' })
  cidade_capital: number

  @Column({ type: 'decimal' })
  portuaria: number

  @Column({ type: 'decimal' })
  score_transacional: number

  @Column({ type: 'decimal' })
  score_documental: number

  @Column({ type: 'decimal' })
  score_motorista: number

  @Column({ type: 'decimal' })
  verificado: number

  @Column({ type: 'decimal' })
  dependencia: number

  @Column({ type: 'decimal' })
  tipo_usuario: number

  @Column({ type: 'decimal' })
  resposta: number

  @ManyToOne(() => person)
  @JoinColumn({ name: 'person_id' })
  person: person
}
