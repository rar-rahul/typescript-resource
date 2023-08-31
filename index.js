/*
? Interfaces

NOTES
- Interfaces are yet another way to name Object types
*/
function printCarDetails(carObj) {
    console.log("My car is ".concat(carObj.make));
    console.log("My car was launched in ".concat(carObj.model));
    carObj.accelerate();
}
printCarDetails({
    make: "Hyundai",
    model: 2009,
    sedan: false,
    accelerate: function () {
        console.log("accelerated the car");
    },
    decelerate: function () {
        console.log("decelerated the car");
    }
});
