//1.Sum All Numbers in a Range
function sumAll(arr) {
    let sum = 0;
    var aux;
    if (arr[0] > arr[1])
      {
        aux = arr[0];
        arr[0] = arr[1];
        arr[1] = aux;
      }
    while (arr[0] <= arr[1])
      {
        var i = arr[0];
        sum += i;
        arr[0]++;
      }
    return sum;
  }
  
  console.log(sumAll([1, 4]));

//2.Diff Two Arrays
function diffArray(arr1, arr2) {
    const newArr = [];
  
    function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
      for (let i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          // Pushing the elements unique to first to newArr
          newArr.push(first[i]);
        }
      }
    }
  
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
  
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  