import faker from "faker";
import { Markable } from "./CustomMap";

export class User implements Markable {
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.coordinates = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  color: string = "Black";

  markerContent(): string {
    return `Hello my name is ${this.name}`;
  }
}
