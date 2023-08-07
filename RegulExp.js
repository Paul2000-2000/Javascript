// 1

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

console.log(result);


//2

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result1 = waldoRegex.test(waldoIsHiding);

console.log(result1);


//3

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result2 = petRegex.test(petString);


//4

let myString1 = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result3 = fccRegex.test(myString1);

//5

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/i; // Change this line                          // nu conteaza cu ce litere e scris
let result4 = extractStr.match(codingRegex); // Change this line

console.log(result4);

//6 Find More Than the First Match

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle /g; // Change this line                        /g cauta de cate ori
let result5 = twinkleStar; // Change this line 

// 7 Match Anything with Wildcard Period

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Change this line
let result6 = unRegex.test(exampleStr);

// 8 Match Single Character with Multiple Possibilities



// 9 Match Letters of the Alphabet
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z,A-Z]/gi; // Change this line
let result7 = quoteSample.match(alphabetRegex); // Change this lineMatch Letters of the Alphabet

// 10 Match Numbers and Letters of the Alphabet
let quoteSample1 = "Blueberry 3.141592653s are delicious.";
let myRegex1 = /[h-s2-6]/gi; // Change this line
let result8 = quoteSample.match(myRegex1); // Change this line

// ^ care nu sunt

// 11 Match Single Characters Not Specified
let quoteSample2 = "3 blind mice.";
let myRegex2 = /[^aeiou^0-9]/gi; // Change this line
let result9 = quoteSample.match(myRegex); // Change this line


// 12 Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex3 = /s+/g; // Change this line
let result10 = difficultSpelling.match(myRegex);

//  * one or more 

// 13 Match Characters that Occur Zero or More Times
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result11 = chewieQuote.match(chewieRegex);

// 14Find Characters with Lazy Matching

// .*? textul dintre < >

let text = "<h1>Winter is coming</h1>";
let myRegex4 = /<.*?>/; // Change this line
let result12 = text.match(myRegex);


// 15 Find One or More Criminals in a Hunt

let reCriminals = /C+/; // Change this line


// 16 Match Beginning String Patterns

// doar daca era primu cuvant

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result13 = calRegex.test(rickyAndCal);


// 17 Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result14 = lastRegex.test(caboose);

// 18 Match All Letters and Numbers

let quoteSample3= "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result15 = quoteSample.match(alphabetRegexV2).length;


// 19 Match Everything But Letters and Numbers

let quoteSample4 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result16 = quoteSample.match(nonAlphabetRegex).length;


// 20 Match All Numbers

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result17 = movieName.match(numRegex).length;


// 21 Match All Non-Numbers
let movieName1 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result18 = movieName.match(noNumRegex).length;


// 22 Restrict Possible Usernames

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result19 = userCheck.test(username);
console.log(result19)

// 23 Match Whitespace  \s space
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result20 = sample.match(countWhiteSpace);

// 24 Match Non-Whitespace Characters

let sample1 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result21 = sample.match(countNonWhiteSpace);


// 25 Specify Upper and Lower Number of Matches

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result22 = ohRegex.test(ohStr);

// 26 Specify Only the Lower Number of Matches

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result23 = haRegex.test(haStr);

// 27 Specify Exact Number of Matches

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result24 = timRegex.test(timStr);

// 28 Check for All or None    ? preivous character 0 or more

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result25 = favRegex.test(favWord);




