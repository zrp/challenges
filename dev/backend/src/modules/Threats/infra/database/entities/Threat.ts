import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import ThreatHero from './ThreatHero';

@Entity('threats')
class Threat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  dangerLevel: string;

  @Column()
  monsterName: string;

  @Column({ type: 'float8', precision: 10, scale: 6 })
  lat: number;

  @Column({ type: 'float8', precision: 10, scale: 6 })
  lng: number;

  @OneToMany(() => ThreatHero, threathero => threathero.threat, {
    cascade: true,
    eager: true,
  })
  threat_hero: ThreatHero[];
}

export default Threat;
