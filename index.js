// Code your solution in this file!
function distanceFromHqInBlocks(num) {
    //returns the number of blocks given a value
    if (num > 42) {
     return num - 42;
    } else {
        return 42 - num;
    }
}

function distanceFromHqInFeet(num) {
// calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
 const feet = distanceFromHqInBlocks(num);
//the return value of distanceFromHqInBlocks can then be used to calculate feet
return feet * 264;
}

function distanceTravelledInFeet(start, end) {
    if (start < end) {
        return (end - start) * 264;
      } else {
        return (start - end) * 264;
      }
}

function calculatesFarePrice(start, end) {
    const result = distanceTravelledInFeet(start, end);

    if (result <= 400) {
      return 0;
    } else if (result > 400 && result <= 2000) {
      return .02 * (result - 400);
    } else if (result > 2000 && result < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }

}