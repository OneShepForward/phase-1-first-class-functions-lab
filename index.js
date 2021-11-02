// 1
const returnFirstTwoDrivers = function (array) {
    const newArray1 = array.slice(0,2);
    return newArray1;
    }

// 2    
const returnLastTwoDrivers = function (array) {
    const newArray2 = array.slice(-2);
    return newArray2;
}

// 3
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4
function createFareMultiplier(i) {
    return function fareFunction(fare) {
        return fare * i;
    };
}

// let fare = 5;
//5
const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

//6
const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

//7
function selectDifferentDrivers(arrayOfDrivers, driverFunction) {
    return driverFunction(arrayOfDrivers);
}