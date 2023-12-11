// Question 1.
{
    { // 1A & 1B 
    
    const ages = [3,9,23,64,2,8,28,93];

    // ages.push('56') adds the number 56 to the array at the end of the list. Therefore if I would turn the line below into a comment the variable newValue would be 90 instead of 53 since-
    // 93 would be the last number in the array and it would be the new lastValue variable. 
const agesMore = ages.push('56');
    
let firstValue = ages[0]; // ages[i] selects index 0 which would always be the first value in the array. my variable 
    
let lastValue = ages[ages.length - 1]; // ages[ages.length - 1] gives me the value in the last index of my array by taking the total length of the array -
        //and subtracting by 1 to account for index 0.

let newValue = lastValue - firstValue;

    console.log(newValue); //console.log(newValue) logs whatever is inputted into the function on the browser's console.
    console.log(ages.length - 1);
    }

    { // 1C
const ages = [3,9,23,64,2,8,28,93]; // this is the current values for the ages array.
let ageSum = 0 

for(let i = 0; i < ages.length; i++){ // The for loop changes the value of i to the length of the ages array. allowing me to access each index of the array.
    ageSum += ages[i]; // I declared the ageSum variable to zero in order to add the values of the ages array. [i] iterates through my array.
        
    //console.log('Index:',i,'Current Sum:', ageSum); // this is for debugging purposes. Just so I can see what my loop is doing.
    } 
let avg = ageSum / ages.length; // I declared the variable avg to the ageSum variable divided by the length of the array. which is the method to find the average.
console.log(avg); 
    }
}

// Question 2.
{
    { // 2A
const names = ['Sam','Tommy','Tim','Sally','Buck','Bob'];
let charSum = 0

for(let i = 0; i < names.length; i++){ //This loop declares i as a variable and says if i is less than the length of the whole array, it will add to the count. This is how I iterate -
// through the array. 
    charSum += names[i].length; //This adds the length of the characters in each index to the variable charSum.
    //console.log('Index ',i,' Character Sum: ',charSum); 
    } 
console.log(charSum / names.length);
    }

    { // 2B

const names = ['Sam','Tommy','Tim','Sally','Buck','Bob'];
let nameSum = ''; 

    for(let i = 0; i < names.length; i++){ //This is the same foundation for a loop as I described earlier.
        nameSum += names[i]; //The names[i] uses the loop written before to iterate through the array and add it variable nameSum 
        nameSum += ' '; //This line adds a space between each name. 
    }     
        console.log(nameSum); 
    }

}

// Question 3.
{
    //You access the last element of an array by first finding out the total length and then subtracting by 1 since arrays start at 0 and not 1. that will give you the index of the last element.
const array = ['Cheese','Lettuce','Patty','Tomato','Pickles'];
let lastElement = array.length - 1; 
    console.log(lastElement); 
    console.log(array[array.length - 1]);    
}

// Question 4.
{
    // The first element of an array is accessed by using [0] after the array name since arrays always start at index 0.
const array = ['Patty','Ketchup','Lettuce','Buns'];
let firstElement = array[0];
    console.log(firstElement);    

}

// Question 5. 
{

const names = ['Sam','Tommy','Tim','Sally','Buck','Bob'];
const nameLengths = [];

for(let i = 0; i < names.length; i++){
    let length = names[i].length; // names[i].length gives me the length of the value in the index i, which is defined by the loop above. 
    nameLengths.push(length); // This one pushes the value of the length variable into the new array nameLengths.
}
console.log(nameLengths)
}

// Question 6.
{   

const names = ['Sam','Tommy','Tim','Sally','Buck','Bob'];
const nameLengths = [];
let concatLength = 0; 

    for(let i = 0; i < names.length; i++){
        nameLengths.push(names[i].length); // names[i].length gives me the length of each index of the array, and then I store it into a new array called nameLengths using the .push function.
        concatLength += nameLengths[i]; // I then add the values of the new array nameLengths into a variable called concatLength.
    }
console.log(concatLength);
}

// Question 7.
{
let word = 'Burger'
let n = 3

function multiplier(a, b) {
    let multiWord = a.repeat(b); // The function takes two parameters and uses those parameters in a.repeat(b). The first parameter is used to be repeated by the .repeat function. -
                                 // and the b parameter is the multiplier so in this example the input a would be repeated b number of times. That value is stored in multiWord
    return multiWord;
  }

console.log(multiplier(word, n));
}

// Question 8.
{

const firstName = 'David';
const lastName = 'Reynoso';
    
let fullName = (a, b) => a + ' ' + b; // This arrow function takes both parameters and concatenates them together with a space in between.
    
console.log(fullName(firstName, lastName)); // The two parameters joined together is the variable firstName and lastName.

}
// Question 9.
{
let array = [5,10,2,78,9];
let count = 0;
function check(array){
    for(let i = 0; i < array.length; i++){ // The for loop gives me a variable i that iterates through the array named array.
        count += array[i]; // It then adds the numbers in each index of the array to the variable count.
    }
    if(count > 100){ // This if statement validates the count variable. if its true then it will run the console.log('True). if not then it will run console.log('False')
        return true;
    } else return false;
}
console.log(check(array));
}
// Question 10.
{

const array = [4,7,9,1,3];
let accrual = 0;

function getAverage(array){

for (let i = 0; i < array.length; i++){ // Another for loop to access the different indexes of the array.
    accrual += array[i]; // This adds and stores the values to the variable accrual.
}
    return accrual / array.length; // this sets the function getAverage() to the division of accrual and array.length giving me the average value of the array.
}

console.log(getAverage(array));
}

// Question 11.
{

const array = [4,7,9,1,3];
const arrayTwo = [5,10,9,1,6];
let accrual = 0;
let accrualTwo = 0;
    
function findAverage(array, arrayTwo){ // This function takes two arrays

for (let i = 0; i < array.length; i++){
    accrual += array[i]; // This adds the values to the accrual variable as described in question 10
}
    
for (let i = 0; i < arrayTwo.length; i++){
    accrualTwo += arrayTwo[i]; // This does the same thing but in a different variable called accrualTwo
}

if(accrual > accrualTwo){ // This if statement then compares the two array values and if array 1 is bigger then array 2. It will return true. otherwise false. 
    return true;
} else return false;
}

console.log(findAverage(array, arrayTwo))
}

// Question 12.
{
let isHotOutside = true
let moneyInPocket = 245

function willBuyDrink(temp, wealth){
    if(temp == true && wealth > 10.50){ // This if statement has two conditions. if temp equals true & if wealth is greater than 10.50. they both have to be true in order to return true. -
                                        // if one of then is false then the function will return false. 
        return true;
    } else return false; 
}
console.log(willBuyDrink(isHotOutside, moneyInPocket));

}