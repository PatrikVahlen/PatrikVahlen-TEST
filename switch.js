const currentWeather = "rainy"
const currentTemperature = 20

if (currentWeather === "rainy" && currentTemperature > 15) {
    console.log(currentTemperature - 3)
} else if (currentWeather === "rainy" && currentTemperature < 15) {
    console.log(currentTemperature - 5)
}