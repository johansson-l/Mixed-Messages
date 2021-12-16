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
const isRaining = (value) => {
    const precipitation = 0;
    // If value is true, randomize the precipitation.
    if (value) {
        return precipitation = Math.floor(Math.random() * 20);
    } else {
        return precipitation;
    };
};

const clothes = ["Umbrella", "Sunglasses", "Warm clothes"];

// Function that return true if it's raining, else false.
const isTrue = () => {
    let i = Math.floor(Math.random() * 2 +1);
    if (i === 1) {
        return true;
    } else {
        return false;
    }
};

const randomMessage = () => {

};

