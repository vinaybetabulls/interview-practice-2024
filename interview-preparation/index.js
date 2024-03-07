/**
 * create function to to add each character from one string to another
 * input1 [a,b,c,d]
 * input2 [p,q]
 * output [ a,p,b,q,c,d]
 */

function addCharacters(input1, input2) {
  const output = [];
  const maxLength = Math.max(input1.length, input2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < input1.length) {
      output.push(input1[i]);
    }
    if (i < input2.length) {
      output.push(input2[i]);
    }
  }

  return output;
}

// Example usage:
const input1 = ["a", "b", "c", "d"];
const input2 = ["p", "q"];
const result = addCharacters(input1, input2);
console.log(result.join(""));

const myObj = Object.create({ name: "John", age: 30 });
console.log(myObj);
delete myObj.__proto__.age;
console.log(myObj.age);

function outer(a) {
  return function inner(b) {
    return a * b;
  };
}

const x = outer(5);

console.log(x(20));
console.log(x(30));

const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p1");
  }, 2000);
});

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("something went wrong");
  }, 1000);
});

Promise.allSettled([p1, p2])
  .then((data) => {
    console.log(data);
  })
  .catch((e) => console.log(e));

// check given array has morethan one repeated element

const hasMultipleDuplicates = (arr) => {
  let hasDuplicates = false;
  let count = 1;

  const repeatedArray = arr.reduce((acc, current) => {
    acc[current] = (acc[current] || 0) + 1;
    return acc;
  }, {});

  for (const key in repeatedArray) {
    if (repeatedArray[key] > 1) {
      count += 1;
    }
  }

  if (count > 2) hasDuplicates = true;
  return hasDuplicates;
};

console.log(hasMultipleDuplicates([1, 2, 3, 1]));
console.log(hasMultipleDuplicates([1, 2, 3, 1, 2, 3]));

var mergeAlternately = function (word1, word2) {
  const maxLength = Math.max(word1.length, word2.length);
  const str = [];
  for (let i = 0; i < maxLength; i++) {
    if (word1.length <= maxLength) {
      console.log(word1);
      str.push(word1[i]);
    }
    if (word2.length <= maxLength) {
      str.push(word2[i]);
    }
  }
  return str.join("");
};

console.log(mergeAlternately("abc", "pqr"));

/**
 * 
 * @param {*} flowerbed 
 * @param {*} n 
 * 
 * You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
Example 2:

Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (i == 0 && flowerbed[i] === 0 && flowerbed[i + 1] !== 1) {
      count += 1;
      flowerbed[i] = 1;
    } else if (
      i == flowerbed.length - 1 &&
      flowerbed[i - 1] !== 1 &&
      flowerbed[i] === 0
    ) {
      count += 1;
      flowerbed[i] = 1;
    } else if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] !== 1 &&
      flowerbed[i + 1] !== 1
    ) {
      count += 1;
      flowerbed[i] = 1;
    }
  }
  console.log({ count });
  return n <= count;
};

console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1)); // 1,0,1,0,1,0,0,1,0,1,0

var arrayStringsAreEqual = function (word1, word2) {
  console.log("word1 join", word1.join(""));
  console.log("word2 join", word2.join(""));
  return word1.join("") === word2.join("");
};

// const word1 = ["ab", "c"], word2 = ["a", "bc"]
const word1 = ["a", "cb"],
  word2 = ["ab", "c"];
// const word1 = ["abc", "d", "defg"], word2 = ["abcddefg"]

console.log(arrayStringsAreEqual(word1, word2));

var reverseVowels = function (s) {
  return s.split("").reverse().join("");
};

console.log(reverseVowels("hello"));

var productExceptSelf = function (nums) {
  const newArr = [];
  for (let i = 0; i < nums.length; i++) {
    let multiply = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        multiply = multiply * nums[j];
        if (multiply === -0) multiply = 0;
      }
    }
    newArr.push(multiply);
  }
  return newArr;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));

// match each characters from one array to another array
const checkTwoArrayCharactersAreEqual = (array) => {
  const arr1 = array[0];
  const arr2 = array[1];
  if (arr1.length !== arr2.length) return false;

  const charCount = {};

  // Count characters in arr1
  for (let i = 0; i < arr1.length; i++) {
    const char = arr1[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Decrement character counts based on arr2
  for (let i = 0; i < arr2.length; i++) {
    const char = arr2[i];
    if (!charCount[char]) {
      return false; // If the character is not found in arr1 or the count is zero, arrays don't match
    }
    charCount[char]--;
  }

  // Check if all characters in arr1 have been matched
  return Object.values(charCount).every((count) => count === 0);
};

console.log(
  "checkTwoArrayCharactersAreEqual",
  checkTwoArrayCharactersAreEqual(["bad", "dac"])
);

// convert last character to upperCase

const toConvertUpperCase = (strArr) => {
  return strArr.map((str) => {
    const lastIndex = str[str.length - 1];
    const remainingString = str
      .split("")
      .splice(0, str.length - 1)
      .join("");
    return remainingString.concat(lastIndex.toUpperCase());
  });
};

console.log(toConvertUpperCase(["test", "convert", "upper"]));

const testobj = {
  name: "test",
  t: this,
  getName: function () {
    console.log(this.name);
  },
};
console.log(testobj);

// Creating a prototype object
let animal = {
  sound: "Some sound",
  makeSound: function () {
    console.log(this.sound);
  },
};

// Creating a new object using the 'animal' object as its prototype
let cat = Object.create(animal);
cat.sound = "Meow";
console.log(cat.sound);
cat.makeSound();
console.log(animal.sound);

//fiboncaii series

function fiboncaii(num) {
  if (num === 1) return [0];
  const output = [0, 1];
  for (let i = 2; i < num; i++) {
    output.push(output[i - 1] + output[i - 2]);
  }
  return output;
}

console.log(fiboncaii(10));

//find missing number from range
const findMissingNumberFromGivenRange = (arr) => {
  const newArray = [];
  const minNumber = Math.min(...arr);
  const maxNumber = arr.length;
  for (let i = minNumber; i <= maxNumber; i++) {
    if (arr.indexOf(i) === -1) {
      newArray.push(i);
    }
  }
  console.log(newArray);
};

findMissingNumberFromGivenRange([4, 3, 2, 0, 1]);

const myFunction = (...args) => {
  console.log(args);
  return args.flat(Infinity);
};

console.log(myFunction([1, 2, 3], [4, 5, [6]]));

const sumGreaterThanGivenValue = (arr, b) =>
  arr.filter((a) => a > b).reduce((acc, current) => (acc += current), 0);

console.log(sumGreaterThanGivenValue([4, 6, 8, 10, 12], 8));

function myFunction1(a) {
  return Object.values(a).reduce((acc, current) => (acc += current), 0);
}
console.log(myFunction1({ a: { b: 2 } }));

// possible ways of cont st
function countPossibleSteps(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  } else {
    return countPossibleSteps(n - 1) + countPossibleSteps(n - 2);
  }
}

console.log(countPossibleSteps(6));

// s= 'hello' => 'holle'
var reverseVowels = function (s) {
  const vowels = ["a", "e", "i", "o", "u"];
  let stringArray = s.split("");
  let i = 0;
  let left = 0;
  let right = stringArray.length - 1;
  while (i < stringArray.length) {
    while (left < right) {
      if (vowels.includes(stringArray[left].toLowerCase())) {
        break;
      }
      left++;
    }

    while (right > left) {
      if (vowels.includes(stringArray[right].toLowerCase())) {
        break;
      }
      right--;
    }

    if (left < right) {
      [stringArray[left], stringArray[right]] = [
        stringArray[right],
        stringArray[left],
      ];
      left++;
      right--;
    }
    i++;
  }

  console.log(stringArray.join(""));
};

reverseVowels("leetcode");

var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(" ");
};

console.log("reverse word", reverseWords("a good   example"));

var moveZeroes = function (nums) {
  if (nums.length === 1) return nums;
  let removeZerosCount = 0;
  const newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      removeZerosCount += 1;
    } else {
      newArr.push(nums[i]);
    }
  }
  if (removeZerosCount > 0) {
    for (let i = 0; i < removeZerosCount; i++) {
      newArr.push(0);
    }
  }

  console.log(newArr, removeZerosCount);
  return newArr;
};

console.log(moveZeroes([0, 0, 1]));

const increasingTriplet = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i < nums.length - 1) {
      if (nums[i] < nums[i + 1] && nums[i + 1] < nums[i + 2]) {
        console.log(nums[i], nums[i + 1], nums[i + 2]);
        return true;
      }
    }
  }
  return false;
};

console.log(increasingTriplet([20, 100, 10, 12, 5, 13]));

const isSubsequence = function (s, t) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[count] === t[i]) {
      count++;
    }
  }
  return count === s.length - 1;
};

console.log(isSubsequence("axc", "ahbgdc"));

x;

console.log("start"); //
const promiseRes = new Promise((resolve, reject) => {
  console.log("promise"); // 
  setTimeout(() => {
    console.log("setTimeout"); //
  }, 0);
  resolve("resolve");
  console.log("after resolve"); // 

  console.log("after setTimeout"); // 
});
promiseRes.then((r) => console.log(r)); //
console.log("end"); // 5

function funContext() {
  console.log(this.name);
}

const objectContext = {
  name: "practice",
};
funContext.call(objectContext)


const immutateString = "immutable string"
immutateString[0] = "I"
console.log(immutateString)

const xArray = [1,2,3,4]
const yArray = [...xArray]
console.log(xArray === yArray)



/**scope */
function scopeFun(){
  let x = 10
  if(true) {
    let x=20
    console.log(x)//20
  }
  console.log(x)//10
} 