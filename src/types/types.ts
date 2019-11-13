export interface Tour {
  tourName: string;
  tourList: [TourStop];
}
export interface TourStop {
  name: string;
  individual?: string;
  note?: string;
  ref?: string;
  latitude: Coordinate;
  longitude: Coordinate;
  location?: string;
}
export interface Coordinate {
  coordinate: number;
  accuracy: number;
}
