// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    if (block >= 42) {
        return block - 42;
    } else {
        return 42 - block
    }
}


function distanceFromHqInFeet(block) {
    let d = distanceFromHqInBlocks(block);
    return d * 264;

}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (destination >= start) {
        return (destination - start) * 264;
    } else {
        return (start - destination) * 264;
    }

}
function calculatesFarePrice(start, destination) {
    //returns the fare for the customer

    let s = distanceTravelledInFeet(start, destination);


    if (s <= 400) { return 0; }

    else if (s > 400 && s <= 2000) { return (s - 400) * 2 / 100; }

    else if (s > 2000 && s <= 2500) { return 25 }

    else if (s > 2500) { return "cannot travel that far"; }

}

console.log(calculatesFarePrice(34, 35));





