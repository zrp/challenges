import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import ThreatHero from '../../../../Threats/infra/database/entities/ThreatHero';
import Class from './Class';

@Entity('heroes')
class Heroes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => Class, { eager: true })
  @JoinColumn({ name: 'classId' })
  heroclass: Class;

  @Column()
  classId: string;

  @Column({ type: 'float8', precision: 10, scale: 6 })
  lat: number;

  @Column({ type: 'float8', precision: 10, scale: 6 })
  lng: number;

  @Column()
  isAvailable: boolean;

  @OneToMany(() => ThreatHero, threathero => threathero.hero)
  threat_hero: ThreatHero[];
}

export default Heroes;
