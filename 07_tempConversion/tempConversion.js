const convertToCelsius = function(fahrenheit) {
  let celcius = (fahrenheit - 32) * 5/9
  return Math.round(celcius * 10) /10
};
// the formula is °C = (°F) - 32) * 5/9
const convertToFahrenheit = function(celcius) {
  let fahrenheit = (celcius * 9/5) + 32
  return Math.round(fahrenheit * 10) /10
};
// (°F) = (°C) * 9/5) + 32

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
