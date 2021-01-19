const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// let totalBatteries = 0


// let a = [1, 2, 3]
// a.reduce(function(total, element){return total + element}, 0)

let totalBatteries = batteryBatches.reduce(function(total, element){return total + element}, 0)