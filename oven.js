function bake(celDeg) {
    let message;
    if (celDeg > 250) {
        message = 'I am not a nuclear reactor.'
    } else if (celDeg < 35) {
        message = 'I am not a fridge.'
    } else {
        message = `Well, that's comfortable!`
    }
    return message;
}

const status = bake(175);

console.log(status);
