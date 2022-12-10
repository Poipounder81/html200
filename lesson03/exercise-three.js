//Create an array that has at least 5 strings
const fruits = ['Apples', 'Blueberries', 'Bananas', 'Oranges', 'Mango'];
console.log(fruits);

//Use a for loop to console log all of the elements plus the index and a comma
fruits.forEach(function(element, index) {
              console.log(index + ',', element);
});
