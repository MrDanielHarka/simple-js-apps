
var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,

    start: function () {
        started = true;
    },

    stop: function () {
        started = false;
    },

    drive: function () {
        if (started) {
            console.log("Zoom zoom!");
        } else {
            console.log("You need to start the engine!");
        }
    }

};