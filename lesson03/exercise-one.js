//Create an array, with at least 5 strings
let carBrands = ['acura', 'audi', 'bmw', 'bentley', 'buick'];
console.log(carBrands);

//Add an element to the end of the array
carBrands.push('cadillac');
console.log(carBrands);

//Remove the third element
carBrands.splice(2, 1);
console.log(carBrands);

//Create a string from the elements and comma separate them
let str = carBrands.join(', ')
console.log(str);
