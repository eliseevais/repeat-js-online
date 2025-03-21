export const value01_03 = "01_03"

const numbers = [1, 2, 3, 4, 5, 6, 33, 33]

console.log("numbers: ", numbers.find(n => n === 3))

const myIncludes = (array: number[], value: number): boolean | undefined => {
  for (const element of array) {
    if (element === value) {
      return true
    }
  }
  return false
}

console.log("myIncludes", myIncludes(numbers, 4))
console.log("myIncludes", myIncludes(numbers, 8))

console.log("indexOf", numbers.indexOf(10))

const myIndexOf = (array: number[], value: number) => {
  for (let index = 0; index < numbers.length; index++) {
    if (array[index] === value) {
      return index
    }
  }
  return -1
}

console.log("myIndexOf", myIndexOf(numbers, 4))
console.log("myIndexOf", myIndexOf(numbers, 20))


const myFilter = (array: number[], callback: any) => {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index]) === true) {
      newArray.push(array[index]);
    }
  }
  return newArray
}

console.log("all 33", myFilter(numbers, (n: number) => n === 33))

const myEven = (num: number) => {
  return num % 2 === 0 ? true : false;
}

console.log("myEven", myEven(2))
console.log("myEven", myEven(3))
console.log("myEven", myEven(7))

console.log("myFilter and myEven", myFilter(numbers, myEven))

const myMap = (array: number[], callback: any) => {
  let newArray = [];
  for (let index = 0; index < array.length; index++) {
    newArray.push(callback(array[index]));
  }
  return newArray
}

console.log("map", numbers.map(x => Math.sqrt(x)))
console.log("map", numbers.map(x => x ** 2))

console.log("myMap", numbers.map(x => x ** 2))

console.log("map", numbers.map(x => x !== 5 ? x : x + 20))

console.log("reduce",numbers.reduce((acc, el) => acc + el, 0))

const testArr = [23, 23, 24, 24, 24, 33, 33, 33, 4, 4, 4]

// const testObj = {
//   23: 2,
//   24: 3,
//   33: 3,
//   4: 3
// }

const funcForReduceTest = (acc: any, el: number) => {
  if (acc[el] !== undefined) {
    acc[el] = acc[el] + 1
  } else {
    acc[el] = 1
  }
  return acc
}

console.log(testArr.reduce(funcForReduceTest, {}))

const myReduce = (array: any, callback: any, acc: any) => {
  let result = acc
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    callback(result, element)
  }
  return result
}

console.log("myReduce", myReduce(testArr, funcForReduceTest , {}))
