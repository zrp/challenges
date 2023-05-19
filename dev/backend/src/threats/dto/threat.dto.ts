export interface Threat {
  rank: string;
}

export interface ThreatOccurrence {
  location: {
    lat: number;
    lng: number;
  };
  dangerLevel: string;
  monsterName: string;
  monster: {
    [key: string]: any;
  };
}
