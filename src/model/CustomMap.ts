// import {} from "googlemaps";
import {} from "google.maps";

// Markable is an argument for addMarker
export interface Markable {
  coordinates: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}

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

  addMarker(mark: Markable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mark.coordinates.lat,
        lng: mark.coordinates.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mark.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
