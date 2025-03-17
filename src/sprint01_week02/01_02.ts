import {log} from "node:util";

export const value01_02 = "01_02"

const numbers = [1, 2, 3, 4, 5, 6]

// PUSH

function myPush(array: number[], ...params: any): number {
  // for (let i = 0; i < params.length; i++) {
  //   array[array.length] = params[i]
  // }

  for (let element of params) {
    array[array.length] = element
  }

  return array.length
}

let res1 = numbers.push(7)
console.log("numbers", numbers)


let res2 = myPush(numbers, 7)

console.log("res1", res1)
console.log("res2", res2)
console.log("numbers", numbers)

function test(...params: number[]) {
  console.log(params)
}

test(1, 2, 3, 4, 5)

const newArray = numbers.concat(7, 8, [9, 10], 11, [12, 13])
console.log("newArray", newArray)

function myConcat(array: number[], ...params: any) {
  const newArray = []

  for (const element of array) {
    newArray[newArray.length] = element
  }
  for (const element of params) {
    if (Array.isArray(element) === false) {
      newArray[newArray.length] = element
    } else {
      for (const el of element) {
        newArray[newArray.length] = el
      }
    }
  }
  return newArray
}

const res3 = myConcat(numbers, 7, 8, [9, 10], 11, [12, 13])
console.log("res3", res3)


function myPop(array: number[]) {

  if (array.length === 0) {
    return undefined
  }

  const lastElement = array[array.length - 1]
  array.length = array.length - 2

  return lastElement
}

console.log("myPop", myPop(numbers))
console.log("myPop", numbers)

function myShift(array: number[]) {
  const firstElement = array[0]
  for (let i = 1; i < array.length; i++) {
    array[i - 1] = array[i]
  }
  array.length = array.length - 1
  return firstElement
}

console.log("myShift", myShift(numbers))
console.log("myShift", numbers)

function myUnshift(array: number[], ...rest: any[]) {
  const restLength = rest.length
  array.length = array.length + restLength

  for (let i = 0; i < array.length; i++) {
    array[array.length - 1 - i] = array[array.length - 1 - restLength - i]
  }
  for (let i = 0; i < restLength; i++) {
    array[i] = rest[i]
  }

  // const temp = [...rest, ...array]
  // for (let i = 0; i < array.length; i++) {
  //   const element = array[i]
  //   array[i] = temp[i]
  // }
}

console.log("myUnshift", myUnshift(numbers, 0, 1))
console.log("myUnshift", numbers)

function myReverse(array: number[]) {
  for (let i = 0; i < array.length / 2; i++) {

    const temp = array[array.length - 1 - i]
    array[array.length - 1 - i] = array[i]
    array[i] = temp

  }
}

console.log("myReverse", myReverse(numbers))
console.log("myReverse", numbers)
