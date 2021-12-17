console.log("Mixed Messages");

// Return random temperature centigrade
const returnTemp = () => {
    const temp = Math.floor(Math.random() * 35);
    return temp;
};

// Return random wind [m/s]
const returnWind = () => {
    const wind = Math.floor(Math.random() * 15);
    return wind;
};

// Checks if it's raining. If so, return precipitation [mm]
let isRaining = (value) => {
    let precipitation = value;
    // If value is true, randomize the precipitation.
    if (value) {
        return precipitation = Math.floor(Math.random() * 20);
    } else {
        return precipitation;
    };
};

const clothes = ["Umbrella", "Sunglasses", "Warm clothes"];

// Function that return true if it's raining, else false.
let isTrue = () => {
    let i = Math.floor(Math.random() * 2 +1);
    if (i === 1) {
        return true;
    } else {
        return false;
    }
};

const sunny = () => {
    const summerGear = [clothes[1]];
    const temp = returnTemp();
    return console.log(`It's ${temp}°C and sunny outside. Better wear ${summerGear}!`);
};

const windy = () => console.log(`There's some strong winds today. Use ${clothes[2]}!`);

const sunnyOrWindy = () => {
    let randNum = Math.floor(Math.random() * 2 +1);
    if (randNum === 1) {
        return sunny();
    } else if(randNum === 2) {
        return windy();
    };
};

let randomMessage = () => {
    let isItRaining = isRaining(isTrue());
    if (isItRaining) {
        console.log(`You better use a ${clothes[0]} because it's raining outside. Total rain so far ${isItRaining}mm`)
    } else {
        sunnyOrWindy();
    };
};

randomMessage();