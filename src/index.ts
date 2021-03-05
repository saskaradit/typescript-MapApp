import { User } from "./model/User";
import { CustomMap } from "./model/CustomMap";
import { Company } from "./model/Company";

const user = new User();
const company = new Company();
const map = new CustomMap("map");

// map.addUserMarker(user);
map.addMarker(user);
map.addMarker(company);
