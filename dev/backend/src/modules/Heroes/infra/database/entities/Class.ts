import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Hero from './Heroes';

@Entity('classes')
class HeroClass {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Hero, hero => hero.heroclass)
  heroes: Hero[];
}

export default HeroClass;
