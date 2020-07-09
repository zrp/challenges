interface IThreatHero {
  threatId: string;
  heroId: string;
  isAlive: boolean;
}
export default interface IHeroDTO {
  id?: string;
  name: string;
  classId: string;
  lat?: number;
  lng?: number;
  isAvailable?: boolean;
  threat_hero?: [IThreatHero];
}
