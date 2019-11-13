import express from "express";

const app = express();
const port = 8080 || process.env.PORT;
const response = {
    "tourName": "Tour Name Here",
    "tourList": {
        "tourStop": {
            "stopNumber": "22",
            "prevStop": "21",
            "nextStop": "23",
            "name": "Name",
            "individual": "Individual Name Here",
            "note": "Interesting information.",
            "ref": "https://www.someplace.com/somedirectory/",
            "geoLocation": {
                "latitude": {
                    "coord": "12.345678",
                    "accuracy": "2"
                },
                "longitude": {
                    "coord": "-123.456789",
                    "accuracy": "3"
                }
            },
            "location": "Address Here"
        }
    }
}

app.get("/", (req, res) => {
    res.json(response);
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});