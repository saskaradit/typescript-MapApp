import { User } from "./User";
import { Company } from "./Company";

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mark: User | Company): void {
    // mark.coordinates
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mark.coordinates.lat,
        lng: mark.coordinates.lng,
      },
    });
  }
  addCompanyMarker(company: Company): void {}
}
