// Domnik Tramondo

// 1st elements of code - Map

let myMap = new Map();
console.log(myMap);

// Setting and defining the maps
myMap.set('name', 'Domnik');
myMap.set('age', 45);
myMap.set('city', 'Tempe');

console.log(myMap);

console.log(myMap.get('name'));
console.log(myMap.has('age'));
console.log(myMap.has('course'));

myMap.delete('city');

console.log(myMap);

//Writing the for statement

for(let [key,value] of myMap){
    console.log(`${key} : ${value}`)
    // console.log(key + ':' + value)
}

const valuesInArray = Array.from(myMap.values());
console.log(valuesInArray);

console.log(myMap.size);

let otherMap = new Map([
    ['county', 'USA'],
    ['job', 'game designer'],
]);

otherMap.forEach((key,value)=>{
    myMap.set(key,value)
});

console.log(myMap);

function iterateMap(map){
    for(let [key,value] of map){
        console.log(`${key} : ${value}`);
    }
}

iterateMap(myMap);

// 2nd Element - Array

// Set the use of a list for shoppers
let shoppingList = [];

// Add a function for adding items
function addItem(name, quantity, price){
    let item = {name, quantity, price};
    shoppingList.push(item);
}

// Add a function to be able to update items
function updateQuantity(name, new_quantity){
    let itemIndex = shoppingList.findIndex(item => item.name == name);
    if(itemIndex !== -1){
        shoppingList[itemIndex].quantity = new_quantity;
    }
    else{
        console.log("Item not found");
    }
}

// Add a function to remove Items from it
function removeItem(name){
    let itemIndex = shoppingList.findIndex(item => item.name == name);
    if(itemIndex !== -1){
        shoppingList.splice(itemIndex,1);
        console.log("Item deleted");
    }
    else{
        console.log("Item not found");
    }
}

// Add a function display for each item
function displayShoppingList(){
    shoppingList.forEach(item =>{
        console.log(`${item.name}`);
        console.log(`${item.quantity}`);
        console.log(`${item.price}`);
    });
}

// Examples of adding items 
addItem("Apples", 5, 2.5);
addItem("Gaming Computer", 1, 400);
addItem("Cheez-its", 2, 5);

// Make sure that the display function works
displayShoppingList();

// Examples of updating the quantity from the adding items
updateQuantity("Apples", 3)
updateQuantity("Gaming Computer", 2)

// Example of removing one of the items from the add slots
removeItem("Cheez-its")

// Display the shopping list
displayShoppingList();

// 3rd element - Recursion -- Desending from 20

function desendingOrder(BeginningNo){
    console.log(BeginningNo);
    let NextNo = BeginningNo - 1;
    if (NextNo > 0){
        desendingOrder(NextNo);
    }
}
desendingOrder(20);
