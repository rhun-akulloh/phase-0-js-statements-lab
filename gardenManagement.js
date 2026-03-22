const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;


//Check temperature
if (temperature > 80) {
  console.log("Watering on");
} else {
  console.log("Watering off");
}

//Check time of day
if (timeOfDay === "evening" || timeOfDay === "night") {
  console.log("Lights on");
} else {
  console.log("Lights off");
}

//Increment soil moisture
while (soilMoisture < 40) {
  soilMoisture += 5;
  console.log(soilMoisture);
}