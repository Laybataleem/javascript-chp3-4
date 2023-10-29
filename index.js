// Practice exercise 3.1
// 1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and 
// "Apples."
// 2. Check your list length in the console.
// 3. Update "Bread" to "Bananas."
// 4. Output your entire list to the console

let array1 = ["Milk", "Bread", "Apples"];
console.log(array1.length);
array1.splice(1, 1, "bananas");
console.log(array1);

// Practice exercise 3.2
// 1. Create an empty array to use as a shopping list.
// 2. Add Milk, Bread, and Apples to your list.
// 3. Update "Bread" with Bananas and Eggs.
// 4. Remove the last item from the array and output it into the console.
// 5. Sort the list alphabetically.
// 6. Find and output the index value of Milk.
// 7. After Bananas, add Carrots and Lettuce.
// 8. Create a new list containing Juice and Pop.
// 9. Combine both lists, adding the new list twice to the end of the first list
// 10. Get the last index value of Pop and output it to the console

let shoppingList = ["Milk", "Bread", "Apples"];
shoppingList.splice(1, 1, "Bananas", "Eggs");                              // 3. Update "Bread" with Bananas and Eggs.
console.log(` Update shoppingList are ${shoppingList}`);
shoppingList.pop();                                                      // 4. Remove the last item  
console.log(`Remaining shoppingList are ${shoppingList}`);              //output it into the console.   
shoppingList.sort();
console.log(`Our sort shoppingList are  ${shoppingList}`);               // 5. Sort the list alphabetically.
let item = "milk";                                                         //the index value of Milk.
let index = shoppingList.indexOf(item);
console.log(index);
// 7. After Bananas, add Carrots and Lettuce.
shoppingList.splice(1, 0, "carrots", "lettuce");
console.log(`Our new shoppingList are  ${shoppingList}`);
console.log(`Our sorted shopping List are "${shoppingList}"`);
// 8. Create a new list containing Juice and Pop.
let newList = ["Juice", "Pop"];
// // Combine both lists, adding the new list twice to the end of the first list
 let combinedList = shoppingList.concat(newList, newList);
  console.log("Combined List:", combinedList);

//last index value of Pop and output it to the console
let itemA = "pop";
let index2 = shoppingList.lastIndexOf(itemA);
console.log(index2);

//  exercise 3.3
// 1. Create an array containing three values: 1, 2, and 3.
// 2. Nest the original array into a new array three times.
// 3. Output the value 2 from one of the arrays into the console.
// */
const originalArray = [1, 2, 3];

const nestedArrays = [originalArray, originalArray, originalArray];

console.log(nestedArrays[1][1]);


// Practice exercise 3.4
// 1. Create a new myCar object for a car. Add some properties, including, but not
// limited to, make and model, and values for a typical car or your car. Feel free
// to use booleans, strings, or numbers.
// 2. Create a variable that can hold the string value color. This variable
// containing a string value color can now be used to reference the property
// name within myCar. Then, use the variable within the square bracket notation
// to assign a new value to the color property in myCar.
// 3. Use that same variable and assign a new property string value to it, such as
// forSale. Use the bracket notation once again to assign a new value to the
// forSale property to indicate whether the car is available for purchase.
// 4. Output make and model into the console.
// 5. Output the value of forSale into the console.

// // Define the variable to hold the string value "color"
let car = "color";

// Create the myCar object
let myCar = {
    make: "Honda Civic",
    model: "Camry",
    year: 2020,
    color: "white" // Initial color value
};

// Use the variable within square bracket notation to assign a new value to the "color" property
myCar[car] = "black";

// Now, the "color" property in myCar has been updated to "red"
console.log(myCar.color); // Output: "black"

car= "forSale";
myCar["forSale"] = true;
console.log("Is the car for sale? " + myCar.forSale);
// Output make and model into the console.
console.log( "the car is" + myCar.make);
console.log( " the model of car is " + myCar.model);

// Practice exercise 3.5
// 1. Create an object named people that contains an empty array that is called
// friends.
// 2. Create three variables, each containing an object, that contain one of your
// friend's first names, last names, and an ID value.
// 3. Add the three friends to the friend array.
// 4. Output it to the console.

let people = {
  friends: []
};


let 
  myfriend1 = {
   firstName: "Layba",
    lastName: "Taleem",
    IDvalue: 2345,};


let 
myfriend2 = {
   firstName:"Mariyam",
    lastName: "Furqan",
    IDvalue: 26788,};

let myfriend3= {
   firstName: "Anglee",
    lastName: "Arif",
    IDvalue: 57957,};

     people.friends.push(myfriend1, myfriend2, myfriend3);

// Output the array to the console
console.log(people);


// CHAPTER PROJECT
// const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
// {test: 'one', score: 55}, ['one', 'two']];
// Manipulate your array using various methods, such as pop(), push(), shift(), and
// unshift(), and transform it into the following:


const theList = ['Laurence', 'Svekis', true, 35, null, undefined,{test: 'one', score: 55}, ['one', 'two']];


theList.pop();             //for removing last element of an array
theList.shift();           //for removing first element of an array
theList.splice(0,0, "First");
// Assign "hello World" to the fourth item value (index 3)
theList[3] = "hello World";
theList[2] = "MIDDLE";           // assign middle to the third index 

theList.push("Last");         //add last to the last position
console.log(theList);

//second project
// Create an array to hold an inventory of store items.
// 2. Create three items, each having the properties of name, model, cost, and
// quantity.
// 3. Add all three objects to the main array using an array method, and then log
// the inventory array to the console.
// 4. Access the quantity element of your third item, and log it to the console.
// Experiment by adding and accessing more elements within your data
// structure.
let inventory = [];

// Step 2: Create three items with properties (name, model, cost, quantity)
let item1 = {
  name: "Bread",
  model: "Model_1",
  cost: 100,
  quantity: 50,
};
let  item2 = {
  name: "Rusk",
  model: "Model-2",
  cost: 150,
  quantity: 50,
};


let item3 = {
  name: "burgerbun",
  model: "Model-3",
  cost: 290.99,
  quantity: 250,
};

// Step 3: Add all three items to the inventory array using the push method
inventory.push(item1, item2, item3);

// Log the inventory array to the console
console.log("Inventory Array:", inventory);

// Step 4: Access the quantity element of the third item and log it to the console
console.log("Quantity of the third item:", inventory[2].quantity);

// Step 5: Experiment by adding and accessing more elements within your data structure
// Add more items to the inventory array
const item4 = {
  name: "pizza",
  model: "Model-4",
  cost: 400,
  quantity: 100,
};

inventory.push(item4);

// Access and log a property of the newly added item
console.log("Cost of the fourth item:", inventory[3].cost);
                         //CHAPTER 4

// Practice exercise 4.1
// 1. Create a variable with a Boolean value.
// 2. Output the value of the variable to the console.
// 3. Check whether the variable is true and if so, output a message to the console,
// using the following syntax:
// if(myVariable){
// //action
// }
// Logic Statement
// 4. Add another if statement with an ! in front of the variable to check whether
// the condition is not true, and create a message that will be printed to the
// console in that instance. You should have two if statements, one with an
// ! and the other without. You could also use an if and an else statement
// instead—experiment!

let name=true;
console.log("the value of boolean is :" + name);
if(name){
  console.log(" your name is correct");
}
if (inventory[3].quantity !== 0) {
  console.log("The quantity of the third item is not zero.");
} else {
  console.log("The quantity of the third item is zero.");
}
if (inventory[3].quantity === 250) {
  console.log("The quantity of the third item is equal to 250.");
} else {
  console.log("The quantity of the third item is zero.");
}









