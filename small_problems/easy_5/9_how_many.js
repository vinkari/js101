/*
Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. 
Consider the words case sensitive e.g. ("suv" !== "SUV").
*/

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

function countOccurrences(vehicles) {
  vehicles = vehicles.map(vehicle => vehicle.toLowerCase());
  
  let count = {};
  vehicles.forEach(vehicle => {
    if (count.hasOwnProperty(vehicle)) {
      count[vehicle] += 1;
    } else {
      count[vehicle] = 1;
    }
  })
 
  for (let prop in count) {
    console.log(`${prop} => ${count[prop]}`);
  }
}

countOccurrences(vehicles);