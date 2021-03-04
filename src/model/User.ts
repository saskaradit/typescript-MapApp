import faker from 'faker'


export class User {
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.name = faker.name.firstName()
    this.coordinates = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
}
