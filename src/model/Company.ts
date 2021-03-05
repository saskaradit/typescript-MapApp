import faker from "faker";
import { Markable } from "./CustomMap";

export class Company implements Markable {
  name: string;
  catchPhrase: string;
  coordinates: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.coordinates = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.latitude()),
    };
  }

  color: string = "Pink";

  markerContent(): string {
    return `
    <div>
      <h1>We are from ${this.name}</h1>
      <h3>${this.catchPhrase}</h3>;
    </div>`;
  }
}
