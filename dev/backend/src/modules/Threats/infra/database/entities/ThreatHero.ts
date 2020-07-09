import {
  Entity,
  ManyToOne,
  JoinColumn,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Heroes from '../../../../Heroes/infra/database/entities/Heroes';
import Threat from './Threat';

@Entity('threats_heroes')
class ThreatHero {
  @PrimaryGeneratedColumn('uuid')
  threatId: string;

  @PrimaryGeneratedColumn('uuid')
  heroId: string;

  @ManyToOne(() => Threat, threat => threat.threat_hero)
  @JoinColumn({ name: 'threatId' })
  threat: Threat;

  @ManyToOne(() => Heroes, threat => threat.threat_hero)
  @JoinColumn({ name: 'heroId' })
  hero: Heroes;

  @Column()
  isAlive: boolean;
}

export default ThreatHero;
