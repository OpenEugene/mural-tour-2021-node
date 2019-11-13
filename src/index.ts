import express from "express";
import { Tour, TourStop, Coordinate } from "../src/types/types";

const app = express();
const port = 8080 || process.env.PORT;
let lon: Coordinate = {
  coordinate: 12.345678,
  accuracy: 2
};
let lat: Coordinate = {
  coordinate: -123.456789,
  accuracy: 3
};
let tourStop: TourStop = {
  name: "A tour stop",
  ref: "https://www.someplace.com/somedirectory/",
  note: "Something of note here",
  latitude: lat,
  longitude: lon
};
let response: Tour = {
  tourName: "A tour name",
  tourList: [tourStop]
};

app.get("/", (req, res) => {
  res.json(response);
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
