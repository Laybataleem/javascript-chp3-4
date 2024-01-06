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

//   if statement with an ! in front of the variable to check whether
//  the condition is not true,
if (inventory[3].quantity !== 0) {
  console.log("The quantity of the third item is not zero.");
} else {
  console.log("The quantity of the third item is zero.");
}
// one with an ! and the other without.
if (inventory[3].quantity === 100) {
  console.log("The quantity of the fourth item is equal to 100.");
} else {
  console.log("The quantity of the third item is zero.");
}

// Change the variable to the opposite to see how the result changes.
 name=false;
 console.log("the value of boolean is :" + name);
if(name){
  console.log(" your name is correct");
}

// Practice exercise 4.2
// 1. Create a prompt to ask the user's age
// 2. Convert the response from the prompt to a number
// 3. Declare a message variable that you will use to hold the console message for
// the user
// 4. If the input age is equal to or greater than 21, set the message variable to
// confirm entry to a venue and the ability to purchase alcohol
// 5. If the input age is equal to or greater than 19, set the message variable to
// confirm entry to the venue but deny the purchase of alcohol
// 6. Provide a default else statement to set the message variable to deny entry if
// none are true
// 7. Output the response message variable to the console

let userAge = prompt("Please enter your age:");
console.log(userAge);
 let  age = parseInt(userAge);
 console.log(age);
 let  message;
//  input age is equal to or greater than 21, set the message
 if (userAge >= 21) {
   message = "confirm entry to a venue and the ability to purchase alcohol";
 } else if (userAge >= 19 ) {                               //input age is equal to or greater than 19, set the message 
   message = "confirm entry to the venue but deny the purchase of alcohol";
 } else {
   message = "You are not able to the venue.";
 }
 //Output the response message
 console.log(message);

//  Practice exercise 4.3
//  1. Create a Boolean value for an ID variable
//  2. Using a ternary operator, create a message variable that will check whether
//  their ID is valid and either allow a person into a venue or not
//  3. Output the response to the console

let IDvalue=true;
let message1= IDvalue = true ? "you are allow into a venue" : "  sorry not allowed";
IDvalue = true ? console.log("denied") : console.log("allowed");

//MAGIS 8 BALLS********
//  Practice exercise 4.4
//Start by setting a variable that gets a random value assigned to it. The value
// is assigned by generating a random number 0-5, for 6 possible results. You
// can increase this number as you add more results.
// 2. Create a prompt that can get a string value input from a user that you can
// repeat back in the final output.
// 3. Create 6 responses using the switch statement, each assigned to a different
// value from the random number generator.
// 4. Create a variable to hold the end response, which should be a sentence
// printed for the user. You can assign different string values for each case,
// assigning new values depending on the results from the random value.
// 5. Output the user's original question, plus the randomly selected case
// response, to the console after the user enters their question.

// Step 1: Generate a random number from 0 to 5
const randomValue = Math.floor(Math.random() * 6);

// Step 2: Prompt the user for a string input
const userEnter = prompt("Tell me your code number:");

// Step 3: Use a switch statement to create 6 responses based on the random value
let response;
switch (randomValue) {
  case 0:
    response = "wow you are lucky.";
    break;
  case 1:
    response = "you can win a car.";
    break;
  case 2:
    response = "plz try again.";
    break;
  case 3:
    response = "Don't go anymore";
    break;
  case 4:
    response = "yes you get more chance.";
    break;
  case 5:
    response = "hurry ! you can do it";
    break;
  default:
    response = "Sorry, I can't predict that.";
    break;
}

// Step 4: Create the final response
let answer = `You asked: "${userEnter}"\nMagic 8-Ball says: ${response}`;

// Step 5: Output the final response to the console
console.log(answer);

 /*exercise 4.5
1. Create a variable called prize and use a prompt to ask the user to set the
value by selecting a number between 0 and 10
2. Convert the prompt response to a number data type
3. Create a variable to use for the output message containing the value "My
Selection: "
4. Using the switch statement (and creativity), provide a response back
regarding a prize that is awarded depending on what number is selected
5. Use the switch break to add combined results for prizes
6. Output the message back to the user by concatenating your prize variable
strings and the output message string
*/

const prize = Number(prompt("Select a number between 0 and 10"));

let mySelection;

switch (prize) {
    case 0:
        mySelection = "You win Laptop";
        break;
    case 1:
        mySelection = "You win Mobile";
        break;
    case 3:
        mySelection = "You win Airpods";
        break;
    case 4:
        mySelection = "You win Smart watch";
        break;
    case 5:
        mySelection = "You win Car";
        break;
    case 6:
        mySelection = "You win Gold";
        break;
    case 7:
        mySelection = "You win Diamond";
        break;
    case 8:
        mySelection = "You win Bronze Medal";
        break;
    case 9:
        mySelection = "You win Cash";
        break;
        default:
            console.log("userfail");
}
console.log(` ${mySelection}`);
