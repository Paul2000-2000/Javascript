// 1.Create a Basic JavaScript Object
let dog = {
    name : "raul",
    numLegs  :2,
  };

// 2. Use Dot Notation to Access the Properties of an Object
let dog1 = {
    name: "Spot",
    numLegs: 4
  };
  // Only change code below this line
  console.log(dog1.name);
  console.log(dog1.numLegs);

  //3.Create a Method on an Object
  let dog2 = {
    name: "Spot",
    numLegs: 4,
    
    sayLegs: function() {
      return "This dog has " + dog2.numLegs + " legs.";
    }
  };
  
  dog2.sayLegs();

  //4.Make Code More Reusable with the this Keyword
  let dog3 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog3.sayLegs();

  //5.Define a Constructor Function
  function Dog(){
    this.name ="paul";
    this.color = "blue";
    this.numLegs =4;
  }



//6.Use a Constructor to Create Objects
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Only change code below this line
  
  let hound = new Dog();

  //7.Extend Constructors to Receive Arguments
  function Dog(name,color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("Happy", "Blue");


//8.Verify an Object's Constructor with instanceof
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  
  let myHouse = new House(2);
  
  myHouse instanceof House;


  //9.Understand Own Properties
  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  
  for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }
  
  //10.Use Prototype Properties to Reduce Duplicate Code
  function Dog(name) {
    this.name = name;
  }
  
  // Only change code above this line
  let beagle = new Dog("Snoopy");
  Dog.prototype.numLegs = 2;


  //11.Iterate Over All Properties
  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle1 = new Dog("Snoopy");
  
  let ownProps1 = [];
  let prototypeProps = [];
  
  // Only change code below this line
  
  for (let property in beagle)
      {
         if (beagle.hasOwnProperty(property)){
           ownProps1.push(property);
            } else {
      prototypeProps1.push(property);
    }
      }

   //12.   Understand the Constructor Property
   function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  function joinDogFraternity(candidate) {
        if (candidate.constructor == Dog)
          return true;
          else return false;
  }

  //13.Change the Prototype to a New Object
  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    // Only change code below this line
      numLegs: 2,
      eat : function(){
  
      },
      describe : function(){
        
      } 
  };

//14.  Remember to Set the Constructor Property when Changing the Prototype
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
   constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//15.Understand Where an Object’s Prototype Comes From
function Dog(name) {
  this.name = name;
}

let beagle2 = new Dog("Snoopy");

// Only change code below this line

Dog.prototype.isPrototypeOf(beagle2);

//16.Understand the Prototype Chain
function Dog(name) {
  this.name = name;
}

let beagle5 = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle5);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

//17.Use Inheritance So You Don't Repeat Yourself

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
  
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
  
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

//18.Inherit Behaviors from a Supertype
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle7 = Object.create(Animal.prototype); // Change this line

//19.Set the Child's Prototype to an Instance of the Parent
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line
Dog.prototype  = Object.create(Animal.prototype);

let beagle10 = new Dog();


//20.Reset an Inherited Constructor Property
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line




let duck10 = new Bird();
Bird.prototype.constructor = Bird;
let beagle11 = new Dog();
Dog.prototype.constructor = Dog;

//21.Add Methods After Inheritance
function Animal() {}
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

function Dog() {}

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log("Woof!");
};
// Add your code above this line

let beagle17 = new Dog();