import faker from 'faker'

export class Company {
  name: string;
  catchPhrase: string;
  coordinates: {
    lat: number;
    lng: number;
  }

  constructor(){
    this.name = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.coordinates = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.latitude())
    }
  }
}

