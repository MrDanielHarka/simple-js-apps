function makeCar() {

    const makes = ['Chevy', 'GM', 'Fiat', 'Webville Motors', 'Tucker'];
    const years = [1955, 1957, 1948, 1954, 1961];
    const colors = ['red', 'blue', 'tan', 'yellow', 'white'];
    const convertible = [true, false];

    const rand1 = Math.floor(Math.random() * makes.length);
    const rand2 = Math.floor(Math.random() * years.length);
    const rand3 = Math.floor(Math.random() * colors.length);
    const rand4 = Math.floor(Math.random() * 5) + 1;
    const rand5 = Math.floor(Math.random() * 2);

    let car = {
        make: makes[rand1],
        year: years[rand2],
        color: colors[rand3],
        passengers: rand4,
        convertible: convertible[rand5],
        mileage: 0,
        drive: function () {
            alert.log('Zoom zoom!');
        }/*  */
    };

    return car;
}

function displayCar(car) {
    console.log(`You new car is a ${car.year} ${car.make}.`);
}

const carToSell = makeCar();
displayCar(carToSell);

