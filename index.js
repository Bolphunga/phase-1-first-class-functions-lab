// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    const firstDrivers = [drivers[0], drivers[1]] 
    return firstDrivers
}

const returnLastTwoDrivers = drivers => {
    const lastDrivers = [drivers[drivers.length - 2], drivers[drivers.length - 1]]
    return lastDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(a) {
    
    return fare => fare*a
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn1) {
  return fn1(drivers)
}







// return fareMultiplier;
  // }
  
// const createFareMultiplier = (multiplier) => fareMultiplier = (fare) => fare*multiplier;
// const fareDoubler =  createFareMultiplier(2);
// const fareTripler = createFareMultiplier(3);

// const createFareMultiplier = a => fare => fare * a;
// const fareDoubler =  createFareMultiplier(2);
// const fareTripler = createFareMultiplier(3);

//   Declare a variable with const and assign a function returned by 
//   createFareMultiplier() to it. Invoke createFareMultiplier() in such a way 
//   that the new fareDoubler() function accepts a fare as its lone argument and 
//   doubles it.


// function fareDoubler(createFareMultiplier) { 
//     const fareFn = createFareMultiplier(2)
//     return fare => fareFn(fare);f
// }
