//1. Convert Celsius to Fahrenheit
function convertCtoF(celsius) {
    let fahrenheit;
    fahrenheit = 9*celsius/5 + 32;
    return fahrenheit;
  }
  
  convertCtoF(30);


  //2.Reverse a String

  function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }


  //3. Factorialize a Number

  function factorialize(num) {
    let p=1;
    if (num == 0)
     return 1;
  
    else
    
      {
        
        var i;
        for (i=1;i<=num;i++)
          p=p*i;
      }
  
      return p;
  }
  
  console.log(factorialize(10));

  //4.Find the Longest Word in a String
  function findLongestWordLength(str) {
  
    var k=0;
    var v=[];
    var x=0;
    var i;
    for (i=0; i < str.length ; i++)
      {
        if (str[i] != ' ')
          {
            k++;
          }
          else {
            if (k>0)
            {
            v[x]= k;
            k=0;
            x++;
            }
          }
      }
  
    if (k > 0) {
      v[x] = k;
    }
  
      var max=-1;
      var j;
      for (j=0;j<v.length;j++)
        if (v[j]>max)
          max = v[j];
    
    return max;
  }
  
  console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));

  //5.Return Largest Numbers in Arrays

  function largestOfFour(arr) {
    var vect = [];
    var k=0;
    for (var i =0; i<arr.length; i++)
      {
        let max = -999;
        for (var j=0; j < arr[i].length ; j++)
            if (arr[i][j] > max)
              max = arr[i][j];
  
        vect[k] = max;
        k++;
      }
      return vect;
  }
  
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

  //6. Confirm the Ending
  function confirmEnding(str, target) {
    let last = str.slice(-target.length);
    return last === target;
  
  
  
  
  }
  
  console.log(confirmEnding("Ban", "an"));

  //7.Repeat a String Repeat a String 

  function repeatStringNumTimes(str, num) {
    let newStr = [];
    let newStrf ="";
    if (num<=0)
      return newStrf;
  
    while (num>0)
      {
        newStr += str;
        num--;
      }
  
  
  
    return newStr;
  }
  
  console.log(repeatStringNumTimes("abc", 3));


  //8.Truncate a String
  function truncateString(str, num) {

    if (num >= str.length)
      return str;
      else{

    let newStr="";
    for (var i=0;i<num;i++)
      newStr += str[i];

    newStr += "...";  
    return newStr;
      }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));


//9.Finders Keepers
function findElement(arr, func) {
  var num;
  let ok=1;
  var i;
  for (i=0;i<arr.length ;i++)
      if (func(arr[i]) && ok == 1)
        {
          
          num = arr[i];
          ok = 0;
          }
    return num;
}

console.log(findElement([1, 1, 3, 7], num => num % 2 === 0));

//10.Boo who

function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);

//11.Title Case a Sentence
function titleCase(str) {
  const newTitle = str.split(" ");
  const updatedTitle = [];
  for (let st in newTitle) {
    updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}

//12.Slice and Splice
/// fail 
  // function frankenSplice(arr1, arr2, n) {
 /*  let newArr=[];
   
   let arr2copy = arr2;
   for (var i=0;i<n;i++)
     {
       newArr += arr2copy[i];
     }
  newArr += arr1;
  
  for (i=n;i<arr2copy.length;i++)
      newArr += arr2copy[i];

      return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
*/

//12.Slice and Splice
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

//13.Falsy Bouncer
function bouncer(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) filteredArr.push(arr[i]);
  }
  return filteredArr;
}


//14.Where do I Belong
function getIndexToIns(arr, num) {
  let newArr = arr.sort();
  let k=0;
  let ok=1;
  if (num <= newArr[0])
      return 0;

   for (var i =0 ; i < newArr.length ; i++)
     if (num > newArr[i] && num < newArr[i+1])
          k = i+1;
          else
      if (num == newArr[i] && num < newArr[i+1] & ok ==1)
          k = i; 
          else
      if (num > newArr[i] && num == newArr[i+1] && ok == 1)
          {
           k = i+1;
           ok=0;
          }

  let ultelem = newArr[newArr.length - 1];
  if (newArr.length == "")
     return 0;
  if (num > ultelem)
      k = newArr.length;
 
        
      
  return k;
}

console.log(getIndexToIns([5, 3, 20, 3], 5));

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= num) return i;
}

return arr.length;


//15. Mutations
function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}