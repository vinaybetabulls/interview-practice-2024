// "use strict";
function FunConstructor() {
    let count = 0
    this.increament = function() {
       return ++count
    }
    this.decreament = function() {
        return --count
    }
}

const funC = new FunConstructor()
console.log(funC.increament())
console.log(funC.increament())
console.log(funC.increament())
console.log(funC.increament())
console.log(funC.increament())

funC.decreament()

function handleClick(count) {

    count++
    console.log(count)
}
function funx() {
    var count = 0;
    document.getElementById('second')?.addEventListener('click', () => handleClick(count))
}
funx()

console.log("starting...")

setTimeout(()=>{
    console.log("setTimeout")
}, 12000)

const startTime =  new Date().getTime()
console.log('startTime', new Date(startTime))
let endDTime =  startTime

while(endDTime < startTime+10000) {
    endDTime = new Date().getTime()
}

const endDate =  new Date(endDTime)
console.log('endTime', endDate)

const users = [
  { name: "sadf", age: 27 },
  { name: "skjb", age: 29 },
  { name: "kfg", age: 31 },
  { name: "mklsg", age: 31 },
  { name: "mklsghg", age: 31 },
  { name: "mdslg", age: 27 },
];

const userAgesCount = users.reduce((acc, current) => {
    acc[current.age] = acc[current.age] ?acc[current.age] + 1:1;
  return acc;
}, {});

console.log({userAgesCount});

// callbacks and callback hell
function a(callback) {
  setTimeout(function () {
    console.log("Step a");
    callback("success a");
  }, 1000);
}

function b(result1, callback) {
  setTimeout(function () {
    console.log("Step b", result1);
    callback("success b");
  }, 1000);
}

function c(callback) {
  setTimeout(function () {
    console.log("Step c");
    callback();
  }, 1000);
}

function d(callback) {
  setTimeout(function () {
    console.log("Step d");
    callback();
  }, 1000);
}

a(function (result1) {
  b(result1, function (result2) {
    console.log("result2", result2);
    c(function () {
      d(function () {
        console.log("all completed");
      });
    });
  });
});
// // a()

// // promise

// // const GITHUB_URL = 'https://api.github.com/users/vinaybetabulls'

// // const user =  fetch(GITHUB_URL)
// // console.log(user)

// // const createOrder = () => {
// //     return new Promise((resolve,reject)=>{
// //         resolve(true)
// //     })
// // }

// // createOrder().then(data=> console.log(data))

// // if (!Array.prototype.myMap) {
// Array.prototype.myMap = function (callback, thisArg) {
//   if (this == null) {
//     throw new TypeError("Array.prototype.myMap called on null or undefined");
//   }

//   if (typeof callback !== "function") {
//     throw new TypeError(callback + " is not a function");
//   }
//   console.log({ thisArg });
//   console.log(this);
//   const array = Object(this);
//   console.log({ array });
//   const length = array.length;
//   const result = new Array(length);

//   for (let i = 0; i < length; i++) {
//     if (i in array) {
//       result[i] = callback.call(thisArg, array[i]);
//     }
//   }

//   return result;
// };
// // }

// // Example usage
// const numbers = [1, 2, 3, 4, 5];
// // numbers.find()
// const doubledNumbers = numbers.myMap(function (num) {
//   return num * 2;
// });

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Array.prototype.myFind = function (callback, thisArg) {
//   console.log("my find");
//   console.log({ thisArg });
//   const array = Object(this);
//   const arrayLenght = array.length;
//   const result = [];

//   for (let i = 0; i < arrayLenght; i++) {
//     if (callback.call(thisArg, array[i])) {
//       return array[i];
//     }
//   }

//   return undefined;
// };

// const myFIndResult = numbers.myFind((num) => num === 3);
// console.log({ myFIndResult });

// const arr = [1, 2, 3];
// const arr1 = arr;
// arr1.push(4);

// console.log("array compare", arr === arr1, arr, arr1);

// const obj = { a: 10 };
// const obj2 = obj;
// obj2.a = 20;
// obj.a = 40;
// obj2.b = 60;
// console.log(obj === obj2);

// console.log("obj compare", obj === obj2, obj, obj2);

// // uniq ele

// // const arrValues = [1, 1, 2, 2, 2, 3, 4, 5, 5, 6];
// // const newArrValues = [];
// // for (const iterator of arrValues) {
// //   // const count = arrValues.filter((val)=> val === iterator).length;
// //   const findIndex = arrValues.findIndex((val) => val === iterator);
// //   if (count === 1) newArrValues.push(iterator);
// // }

// // console.log({ newArrValues });

// //function currying

// const main = (x) => {
//   console.log("inside main");
//   return function (y) {
//     if (y === undefined) {
//       // If no more arguments are provided, return the accumulated sum
//       return x;
//     } else {
//       // If there's another argument, add it to the accumulator and continue currying
//       return main(x + y);
//     }
//   };
// };

// const result = main(1)(2)(4)();
// console.log({ result });

// const str = "hello world";
// let newStr = "";

// for (let i = 0; i < str.length; i++) {
//   if (str[i] !== " ") {
//     newStr += str[i] + (i + 1);
//     console.log(newStr);
//   }
// }

// console.log({ newStr });

// // find character occurence and append count of a character before each character

const occCharacter = "caabbbccde";
let count = 1;
let updatedStr = "";

for (const element of occCharacter) {
  console.log("occ", updatedStr.includes(element));
  if (updatedStr.includes(element)) {
    let v = 0;
    let z = 0;
    for (let j = 0; j < updatedStr.length; j++) {
      if (updatedStr[j] === element) {
        let x = parseInt(updatedStr[j - 1]);
        v = ++x;
        z = j;
        console.log({ [element]: v });
        //  updatedStr += v+occCharacter[i]
      }
    }
    updatedStr[z] = v + element;
  } else {
    updatedStr += 1 + element;
  }
}
console.log({ updatedStr });

// updatestr = '1c1a'

// const element =  document.getElementById("test")
// console.log({element})

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("P1 function");
//   }, 1000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("P2 function");
//   }, 2000);
// });
// const p3 = new Promise((resolve, reject) => {
//   reject("P3 function");
// });

// const getAllResponses = () => {
//   // promose.all
//   // const response = Promise.all([p1, p2, p3])
//   // response.then((res) => console.log(res))
//   //     .catch((error) => console.log({ error }))
//   // promose.any
//   // const anyResponse = Promise.any([p1, p2, p3])
//   // anyResponse.then((res) => console.log(res))
//   //     .catch((error) => console.log({ error }))

//   // promise.allSetteled
//   // const allSettledResponse = Promise.allSettled([p1, p2, p3])
//   // allSettledResponse.then((res) => console.log(res))
//   //     .catch((error) => console.log({ error }))

//   // promise.race
//   const raceResponse = Promise.race([p1, p2, p3]);
//   raceResponse
//     .then((res) => console.log(res))
//     .catch((error) => console.log({ error }));
// };

// // getAllResponses();

// // first approach
// const arr = [1, 2, 3, 4, 5, 6, 7];

// const createChunkArray = (arr, chunkSize) => {
//   const chunkArray = [];
//   for (let i = 0; i < arr.length; i = i + chunkSize) {
//     chunkArray.push(arr.slice(i, i + chunkSize));
//   }
//   return chunkArray;
// };

// const sumChunkArray = (chunkArray) =>
//   chunkArray.reduce((acc, current) => (acc += current), 0);
// const finMaxValue = (chunkSumArray) => Math.max(...chunkSumArray);

// const chunkArrayResult = createChunkArray(arr, 3);
// const chunkSumArrayResult = chunkArrayResult.map((chunk) =>
//   sumChunkArray(chunk)
// );
// const maxValue = finMaxValue(chunkSumArrayResult);
// console.log("chunk max vaue", maxValue);

// // second approach
// const createChunkArrayAndFindMax = (arr, chunkSize) => {
//   const chunkArray = [];
//   for (let i = 0; i < arr.length; i = i + chunkSize) {
//     const chunkArr = arr.slice(i, i + chunkSize);
//     const sumChunkArr = chunkArr.reduce((acc, current) => (acc += current), 0);
//     chunkArray.push(sumChunkArr);
//   }
//   console.log({ chunkArray });
//   console.log("Max value for approach2", Math.max(...chunkArray));
// };

// createChunkArrayAndFindMax(arr, 4);

// // count arr = [1,2,3,4] => jump to position

// const jumArr = [3, 2, 3, 0, 1, 4, 1];

// const jumFun = (arr) => {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i > count || !arr[i]) return false;
//     if (count < arr[i] + i) {
//       count = arr[i] + i;
//     }
//     if (count >= arr.length - 1) return true;
//   }
// };
// console.log("jumparr", jumFun(jumArr));

// x
// let outputStr = "";
// for (let i = 0; i < str.length; i++) {
//   let count = 1;
//   for (let j = i + 1; j < str.length; j++) {
//     if (outputStr.includes(str[i])) break;
//     else if (str[i] === str[j]) {
//       count++;
//     }
//   }
//   if (!outputStr.includes(str[i])) {
//     outputStr += count + str[i];
//   }
// }
// console.log({ outputStr });

// // ------------------------- //
// var y = 5; // Outer scope variable

// function example() {
//   let y = 15; // Inner scope variable, shadowing the outer y
//   console.log(y); // Outputs 15
// }

// example();
// console.log(y);

// /**  */

// function fun() {
//   console.log(this);
// }

// const arrowFuntion = () => {
//   console.log(this);
// };

// fun();
// arrowFuntion();

// const userObject = {
//   name: "test",
//   getName: function () {
//     console.log(this);
//   },
//   getNameArrowFuntion: () => {
//     console.log(this);
//   },
// };

// userObject.getName();
// userObject.getNameArrowFuntion();

// function StudentConstrutor() {
//   (this.name = "ksjga"), (this.getName = function () {});
// }
// const s1 = new StudentConstrutor();
// console.log(s1.name);

// // const StudnetArrowConstructor = () => {
// //   this.name = "snalg"
// // }
// // const s2 =  new StudnetArrowConstructor()
// // console.log(s2.name)

// function regularFunction() {
//   console.log(arguments);
// }

// regularFunction(1, 2, 2, 4, 5);

// const arrowFunctionArgs = () => {
//   // console.log(arguments); // error arrow functions will not have inbuild arguments like normal function
// };

// arrowFunctionArgs(10, 20, 40, 50);

// function getData() {
//   console.log("api calll..");
// }

// //handleInputChange

// function debounce(callback) {
//   return function () {
//     let timeout;
//     if (timeout) clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       callback.call();
//     }, 500);
//   };
// }

// const handleInputChange = debounce(getData);

// /////////////////

// function bar() {
//   var a = 3;

//   function foo() {
//     console.log(a);
//   }

//   foo();
// }

// var a = 5;
// bar();

// const arrTest = [10, 12, 15, 21];
// for (var i = 0; i < arrTest.length; i++) {
//   setTimeout(function () {
//     console.log({ i });
//     console.log("Index: " + i + ", element: " + arrTest[i]);
//   }, 3000);
// }

// const user1Obj = {
//   sampleFun: () => {},
//   val: undefined,
//   test: null, // null
//   x: NaN, // null
//   inf: Infinity, //null
// };

// const copyOfUser1Obj = user1Obj;
// const deepCopyOfuser1 = JSON.parse(JSON.stringify(copyOfUser1Obj)); // don't use when object contians date object, function, NaN, Infinity, undefined
// console.log({ user1Obj, deepCopyOfuser1 });

// let a1 = 10;

// function sum() {
//   console.log("sum...");
//   a1 = a1 + 1;
//   console.log(a1);
// }

// sum();
// sum();
// sum();

/////////////////////////////////////////////

function outerFunction() {
  let x = 10;
  function innerFunction() {
    return x;
  }
  return innerFunction;
}

const val = outerFunction();
console.log(val());

function x() {
  // const a = (b = c = 10);
}
x();
console.log(typeof a, typeof b, typeof c);

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(4));

function findSecondLargest(arr) {
  if (arr.length < 2) {
    return "Array should have at least two elements";
  }

  let largest = arr[0];
  let secondLargest = arr[1];

  if (secondLargest > largest) {
    // Swap the variables if necessary
    [largest, secondLargest] = [secondLargest, largest];
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

// Example usage:
const numbers = [10, 5, 8, 12, 7];
const result = findSecondLargest(numbers);
console.log("Second Largest Number:", result);

function getNameFun() {
  console.log(this, this.name);
}

const obj = {
  name: "vinay",
  getName: () => {
    console.log(this.name);
  },
  getFullName: getNameFun,
};

console.log(obj.getName());
console.log(obj.getFullName());

const getMyFunName = () => {
  console.log(this.age);
};

function MyFunction(name, age) {
  this.name = name;
  this.age = age;
  this.getName = getMyFunName;
  this.getAge = () => {
    console.log(this.age);
  };
}
const myFun1 = new MyFunction("TEST...", 22);
myFun1.getName();
myFun1.getAge();

const obj4 = {
  name: "John",
  age: 30,
};
console.log(Object.getOwnPropertyDescriptors(obj4));

var v = 10;

function fin() {
  var v = 20;
  console.log(v);
}
console.log(v);
fin();

// function currying examples

const currying = (a) => (b) => b ? currying(a + b) : a;

console.log(currying(10)(20)(30)(40)());

function fun() {
  console.log(i);
  if (true) {
    var i = 10;
  }
}
fun();

const dummy = {
  message: "hello",
  getMessage: () => {
    const message = "bye";
    console.log(this.message);
  },
};

console.log(dummy.getMessage());

const arr = [1, 2, 3, 4];

Array.prototype.testMethod = function (...args) {
  console.log(this);
  console.log(args);
  console.log("Hello");
};

console.log(arr.testMethod(10, 20, 30));

const array1 = [10, 20, 30, 40];
const array2 = [2, 5, 6, 8];

// custom concat method
Array.prototype.customConcat = function (...args) {
  const arguments = args;
  const newArray = this;
  for (let i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      for (let j = 0; j < arguments[i].length; j++) {
        newArray.push(arguments[i][j]);
      }
    } else {
      newArray.push(arguments[i]);
    }
  }
  return newArray;
};

array1.customConcat(array2, arr, "10", undefined, null);

// custom flatArray with depth
Array.prototype.flatArrayWithGivenDepth = function (depth = 1) {
  const inputArray = this;
  const outputArray = [];

  function readFromArratDepth(inputArray, depthInput) {
    for (let i of inputArray) {
      const element = i;
      if (Array.isArray(element) && depthInput < depth) {
        readFromArratDepth(element, depthInput + 1);
      } else {
        outputArray.push(element);
      }
    }
  }

  readFromArratDepth(inputArray, 0);
  return outputArray;
};

// custom flatArray without recursion

Array.prototype.flatArrayWithoutRecursion = function () {
  const inputArray = [...this];
  const outputArray = [];
  while (inputArray.length) {
    const lastElement = inputArray.pop();
    if (Array.isArray(lastElement)) {
      outputArray.push(...lastElement);
    } else {
      outputArray.push(lastElement);
    }
  }
  return outputArray;
};

console.log('flatArrayWithGivenDepth..',[[1, 2], 3, 4, [[1, 2, 3, 4]]].flatArrayWithGivenDepth(Infinity));
console.log(
  "flat array without recursion",
  [[1, 2], 3, 4, [[1, 2, 3, [4]]]].flatArrayWithoutRecursion()
);

// custom map

Array.prototype.customMap = function (callback) {
  const inputArray = this;
  const outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    const element = inputArray[i];
    outputArray.push(callback(element, i, inputArray));
  }
  return outputArray;
};

console.log('customMap..',[10, 20, 40, 50].customMap((ele, index) => ele * 2 * index));

// custom reducer

Array.prototype.customReduce = function (callback, initialValue) {
  const inputArray = this;
  let accumulator =
    initialValue != undefined && initialValue != null
      ? initialValue
      : inputArray[0];
  for (let i = 0; i < inputArray.length; i++) {
    const current = inputArray[i];
    accumulator = callback(accumulator, current);
  }
  return accumulator;
};

console.log('customReduce..',
  [10, 20, 30].customReduce(
    (accumulator, current) => (accumulator += current),
    0
  )
);

// custom array filter

Array.prototype.customFilter = function (callback) {
  const inputArray = this;
  const outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    const element = inputArray[i];
    if (callback(element, i, inputArray)) {
      outputArray.push(element);
    }
  }
  return outputArray;
};

console.log('customFilter..',[10, 20, 30, 40].customFilter((element) => element > 10));

console.log("" + (+"99999999999999999" + +"1"));

// custom charAt method

String.prototype.customCharAt = function (position) {
  const inputString = this;
  if (position < 0 || inputString.length < position) return "";
  return inputString[position];
};

console.log('customCharAt..',"hello world".customCharAt(0));

//custom object.entires method

Object.prototype.customEntries = function (args) {
  const inputObject = args;
  const outputArray = [];
  for (const key in inputObject) {
    if (key === "undefined" || key === "null")
      throw new Error("Cannot convert undefined or null to object");
    else if (Object.hasOwn(inputObject, key)) {
      const element = inputObject[key];
      console.log({ element });
      outputArray.push([key, element]);
    }
  }
  return outputArray;
};
const randomKeyOrder = { 100: "a", 2: "b", 7: "c", 8: "" };
console.log('customEntries',Object.customEntries(randomKeyOrder));

// even count numbers sum
const numbersList = [1, 2, 3, 4, 5, 6, 8, 6, 4, 2];
let sumCount = 0;
for (let i = 0; i < numbersList.length; i++) {
  for (let j = i + 1; j < numbersList.length; j++) {
    const sum = numbersList[i] + numbersList[j];
    if (sum % 2 === 0) sumCount++;
  }
}

console.log({ sumCount });

// chunk array by given number and sum all the elements and find max from sum
const findMaxNumberFromChunk = (array, chunkNumber) => {
  const sumArray = [];
  for (let i = 0; i < array.length; i++) {
    const chunkArr = [];
    for (let j = i; j < i + chunkNumber; j++) {
      if (array[j]) chunkArr.push(array[j]);
    }
    const findSumArray = chunkArr.reduce((acc, current) => (acc += current), 0);
    sumArray.push(findSumArray);
  }
  return Math.max(...sumArray);
};

const sumResult = findMaxNumberFromChunk([1, 2, 4, 5, 6, 8, 9], 3); // [[1,2,4],[2,4,5],[4,5,6],[5,6,8],[6,8,9],[8,9],[9]]
// [7,11,15,17,23,17,9] //o/p->23
console.log({ sumResult });

const myArr = [
  [1, 2, 4],
  [2, 4, 5],
  [4, 5, 6],
  [5, 6, 8],
  [6, 8, 9],
  [8, 9],
  [9],
];
console.log([].concat(...myArr));

const vowels = ["a", "e", "i", "o", "u", "y"];

function isVowel(char) {
  return "aeiouy".includes(char);
}

function solution(pattern, source) {
  const n = source.length;
  const m = pattern.length;
  let count = 0;

  for (let i = 0; i <= n - m; i++) {
    let c = 0;
    for (let j = 0; j < m; j++) {
      const sourceChar = source[i + j]; // a
      const patternChar = pattern[j]; // 0
      const checkIsVoiwel = isVowel(sourceChar);
      if (
        (patternChar === "0" && checkIsVoiwel) ||
        (patternChar === "1" && !checkIsVoiwel)
      ) {
        c++;
      }
    }
    if (c === 3) count++;
  }

  return count;
}

// Example usage:
const pattern = "010"; // 0->voiwel, 1 consonant, 1 vowel => so check count of pattern like vowelConsonentVoiwel sequance
const source = "amazing"; // "ama", "maz","azi","zin","ing"

console.log("vowelConsonentVoiwel", solution(pattern, source)); // Output: 2 "a","m",""

// polifill for call
Function.prototype.myCall = function (context = {}, ...rest) {
  context.callback = this;
  context.callback(...rest);
};
// polifill for apply
Function.prototype.myApply = function (context = {}, rest) {
  context.callback = this;
  context.callback(...rest);
};

//polifill for bind

Function.prototype.myBind = function (context = {}, ...rest) {
  context.callback = this;
  return function (...args) {
    context.callback(...rest, ...args);
  };
};

function fullName(first, second, ...rest) {
  console.log(this.firstName, this.lastName, first, second, rest);
}

const student = {
  firstName: "sgdsagd",
  lastName: "sagasdh",
};

fullName.myCall(student, 1, 2, 3, 4, 5);
fullName.myApply(student, [1, 2, 3, 4, 5]);
fullName.myBind(student, 1, 2)(3, 4);

// check a given number is a armstrong or  not

function isArmstrong(arr) {
  const outputArray = [];
  for (const element of arr) {
    const numString = element.toString(); // '153'
    let sum = 0;
    for (const element1 of numString) {
      let x = parseInt(element1);
      sum += Math.pow(x, numString.length);
    }
    if (sum === +numString) {
      outputArray.push(numString);
    }
  }
  return outputArray;
}

console.log(isArmstrong([153, 147, 407]));

const nestedObj = {
  name: "nameObj",
  address: {
    line1: "hyd",
    state: "tg",
  },
};

const doDeepCopy = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj;

  const newObj = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      const element = obj[key];
      newObj[key] = doDeepCopy(element);
    }
  }
  return newObj;
};

const deepCopyObj = doDeepCopy(nestedObj);

deepCopyObj.address.line1 = "deepcopy_line1";
console.log({ deepCopyObj, nestedObj });
function thisPrints() {
  console.log(this);
}

thisPrints.call(nestedObj);

const nestedThisArrow = {
  x: 10,
  a: 20,
  printX: () => {
    console.log(this); // prints window object, since arrow function will have "this" context of it's parent lexical context -> here lexical of print method is global -> here printX lexical context is nestedThisArrow methods and it is presented in global scope
  },

  printA: function () {
    const b = () => {
      console.log(this); // it will prints nestedThisArrow object since here the b functions lexical context of its parent printA method is nestedThisArrow object
    };
    b();
  },
  printeNestedA: function () {
    function b() {
      console.log(this); //prints window since the function will in non strict mode js engine will substitue "this" with window(here we are not binding any this keyword here)
    }
    b();
  },
  printeNestedAWithCall: function () {
    function b() {
      console.log(this); // here attaching the this context to the b method so it will print the nestedThiwArrow object
    }
    b.call(nestedThisArrow);
  },
};

nestedThisArrow.printX();
nestedThisArrow.printA();
nestedThisArrow.printeNestedA();
nestedThisArrow.printeNestedAWithCall();




function fun() {
  var xy = 20
}

fun()

console.log(xy)