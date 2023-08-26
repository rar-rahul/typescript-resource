/**
 * This function prints all the car details to the console.
 * @param make - This is the company that manufactured the car.
 * @param model - The year of manufacture.
 * @param sedan - Indicated whether the car is a sedan or not.
 */
function printModel(model:number[]):number{

    model.forEach(model => { 
        console.log(model)
    })

    let newModel = model[0] + 1;

    return newModel

}

let upcomingModel = printModel([1001,1002,1003])

console.log(upcomingModel)

