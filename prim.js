// Setup
var a;
a = 7;
var b;

// Only change code below this line

b=a;

var c=9;

myFirstName="Paul";
myLastName="Alexa";

let catName = "Oliver";
let catSound = "Meow!";

const sum = 10 + 10;

const fCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line

console.log(fCC, fact); // Change this line

let myVar = 11;

// Only change code below this line
myVar--;

const divide= 10/2;

const ourDecimal = 5.7;

// Only change code below this line
const myDecimal=5.1;

const remainder = 11 % 3;


var x=0;
x+=2;

const myStr = "I am a \"man\"."; // Change this line

const myStr1 = '<a href="http://www.example.com" target="_blank">Link</a>';

const myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

const myStr3 = "This is the start. " + "This is the end."; // Change this line

let myStr4 = "This is the first sentence. ";
myStr4+="This is the second sentence."


// Only change code below this line
const myName = "Alexa";
const myStr6 = "My name is" + myName +".I am well!";


const lastName="dadada";
let length= lastName.length; 
console.log(length);
let firstLetterOfLastName= lastName[0];



// Setup
const lasttName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lasttName[lasttName.length-1]; // Change this line


//Use Bracket Notation to Find the Nth-to-Last Character in a String
const myArray = ["dada",20];
const myArray1 = [["Bulls", 23], ["White Sox", 45]];

// Setup
const myArray2 = [["John", 23], ["cat", 2]];

myArray2.push(["dog",3])
// Only change code below this line

// Setup
const myArray3 = [["John", 23], ["cat", 2]]; //last

// Only change code below this line
const removedFromMyArray=myArray3.pop();
console.log(myArray3);



// Setup
const myArray4 = [["John", 23], ["dog", 3]];    //first

// Only change code below this line
const removedFromMyArray4= myArray4.shift();
console.log(myArray4);



// Setup
const myArray5 = [["John", 23], ["dog", 3]];     //change first
myArray5.shift(); 

// Only change code below this line
myArray5.unshift(["Paul",35]);

const myList = [["ab",1],["ac",2],["ac",3],["ad",4],["ae",5]];


function reusableFunction() {
    console.log("Hi World");
  }
  
  
  reusableFunction();




  function functionWithArgs (b , a) {
    console.log(b+a);
  }
  
  functionWithArgs(1,2);
  
  functionWithArgs(7,9);



  function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val>=25 && val <=50) 
       {
        return "Yes";
      }
    
  
    // Only change code above this line
    return "No";
  }
  
  console.log(testLogicalAnd(10));


  function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch (val){
      case 'a':
      answer ="apple";
      break;
      case 'b':
      answer ="bird";
      break;
      case 'c':
      answer ="cat";
      break;
      default:
        answer="stuff";
        break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);


  function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer="High";
      
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);

//Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line


// Setup
const testObj2= {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj2[playerNumber];   // Change this line

// x obiect y proprietate
//delete x.y;

  





  // Setup
function phoneticLookup(val) {
  let result = "";

  // Ony change code below this line
  const lookup = {
     "alpha":
     "Adams",
      "bravo":
      "Boston",
    "charlie":
      "Chicago",
     "delta":
    "Denver",
      
    "echo":
      "Easy",
     "foxtrot":
      "Frank"
  };
  result = lookup[val];

  // Only change code above this line
  return result;
}

console.log(phoneticLookup("charlie"));


/*
To check if a property on a given object exists or not, you can use the .hasOwnProperty() method. someObject.hasOwnProperty(someProperty)
 returns true or false depending on if the property is found on the object or not

 function checkObj(obj, checkProp) {

  const st = "Not found";
  // Only change code below this line
    if (obj.hasOwnProperty(checkProp))
      return obj[checkProp];
       

  return st;
  // Only change code above this line
}


console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));

console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house"));


*/



const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
  ,
  {
    "artist":"dada",
    "title":"dadadada",
    "release_year":2000,
    "formats":[
      "abc",
      "def",
      "ghi"
    ]
  }
];



const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);





const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

console.log(secondTree);



// Setup
const myArray10 = [];

// Only change code below this line
var i =5 ;
var k= 0;
 while (i>=0)
  {
      myArray10[k]=i;
      k++;
      i--;
  }

  console.log(myArray10);





  // Setup
const myArray11 = [];

// Only change code below this line
var i;

for (i=1;i<=5;i++)
  myArray11.push(i);


console.log(myArray11);
  