const findMinimum = arr => {

  let min = arr[0];
for(let i = 0; i < arr.length; i++){
  if(arr[i] < min){
    min = arr[i];
  }
}
return min
};

const runningSum = arr => {

 for(let i = 1; i < arr.length; i++){
  arr[i] = arr[i]+arr[i-1]
 }
 return arr;

// if the array should not be modified 
// slice also works but i thought it ll take more memory but no it wont 

  // if(arr.length ===0){
  //   return [];
  // }
  // let newArr =[arr[0]];
  // for(let i = 1; i < arr.length ;i++){
  //   newArr.push(arr[i]+newArr[i-1]);
  // }
  // return newArr;
};

const evenNumOfChars = arr => {
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length %2 ===0){
      count++;
    }
  }
  return count;
};

const smallerThanCurr = arr => {
  let numsSmallerAtIndex = [];
  for(let i = 0; i < arr.length; i++){
    let numsSmaller = 0;
    for(let j = 0; j< arr.length; j++){
      if(arr[i] > arr[j]){
        numsSmaller++;
      }
    }
    numsSmallerAtIndex.push(numsSmaller)
  }
  return numsSmallerAtIndex;
  // Chatgpt couldnot do it better ill come back here for mergesort 
//   // Initialize an array to store the count of elements smaller than the current element at each index.
//   const result = new Array(arr.length).fill(0);

//   const mergeSort = indices => {
//     if (indices.length <= 1) {
//       return indices;
//     }

//     const mid = Math.floor(indices.length / 2);
//     const left = mergeSort(indices.slice(0, mid));
//     const right = mergeSort(indices.slice(mid));

//     let i = 0;
//     let j = 0;

//     while (i < left.length) {
//       while (j < right.length && arr[left[i]] > arr[right[j]]) {
//         j++;
//       }
//       result[left[i]] += j;
//       i++;
//     }

//     return merge(left, right);
//   };

//   const merge = (left, right) => {
//     let merged = [];
//     let i = 0;
//     let j = 0;

//     while (i < left.length && j < right.length) {
//       if (arr[left[i]] <= arr[right[j]]) {
//         merged.push(left[i]);
//         i++;
//       } else {
//         merged.push(right[j]);
//         j++;
//       }
//     }

//     while (i < left.length) {
//       merged.push(left[i]);
//       i++;
//     }

//     while (j < right.length) {
//       merged.push(right[j]);
//       j++;
//     }

//     return merged;
//   };

//   mergeSort(Array.from(Array(arr.length).keys()));

//   return result;
};








const twoSum = (arr, target) => {

  // for(let i = 0; i < arr.length; i++){
  //   for(let j = i+1; j< arr.length; j++){
  //     if(arr[i]+arr[j] === target){
  //       return true;
  //     }
  //   }
  // }
  // return false;
// working hash set from chatgpt 
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (seen.has(complement)) {
      return true;
    }

    seen.add(arr[i]);
  }

  return false;
};

const secondLargest = arr => {
  
    if (arr.length < 2) {
      return undefined;
    }

    let firstMax = Math.max(arr[0], arr[1]);
    let secondMax = Math.min(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
      if (arr[i] >= firstMax) {
        secondMax = firstMax;
        firstMax = arr[i];
      } else if (arr[i] > secondMax || secondMax === undefined) {
        secondMax = arr[i];
      }
    }

    return secondMax;
  };

// Fisher-Yates shuffle algorithm,
const shuffle = (arr) => {

  // Your code here
  const shuffledArray = [...arr]; // Create a copy of the original array

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap elements at randomIndex and i
    [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
  }

  return shuffledArray;
};

secondLargest([4, 3, 2, 1])
module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];