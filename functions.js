/* console.log("Hej Hassan")
console.log("Hej John")
console.log("Hej Jane")
console.log("Hej Doe") */

//DRY => Don't Repeat Yourself

// function Greeting(name) {
//     console.log(`Hej ${name}`)
// }
// Greeting("Hassan")
// Greeting("John")
// Greeting("Jane")
// Greeting("Doe")

//camel-case > areaOfCircle
//pascal-case > AreaOfCircle
//Capital Case > AREA_OF_CIRCLE
//snake case > area_of_circle
//kebab case > area-of-circle

function areaOfCircle(radius) {
    if (radius > 0) {
        return radius * radius * Math.PI
    } else
        return 0
}
console.log(areaOfCircle(-3))

function areaOfRectangle(width, height) {
    return width * height
}
console.log(areaOfRectangle(3, 9))

function fahrenheitToCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32)
}
console.log(fahrenheitToCelsius(100))

console.log(Math.abs(-3))