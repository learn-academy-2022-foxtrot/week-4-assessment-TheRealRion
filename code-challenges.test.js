// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { objectTypeSpreadProperty } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

//Template  Red --> Green --> Refactor : 
// describe("funcName", () => {
//     it("", () => {
//       expect(funcName(input)).toEqual(output)
//     })
//   })

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shuffleArr", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

expect(shuffleArr(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
expect(shuffleArr(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
})
})

//GOOD PASS! YAY! 
//ReferenceError: shuffleArr is not defined 

// b) Create the function that makes the test pass.

//PsudoCode: 
//1. Create a function (shuffleArr)
//2. Delete first index of array (.shift)
//3. For remaining index in array (for loop)
    //4. Iterates through array backwards one at a time
    //5. establishes random variable to change index to (Math.floor(Math.random)) and changes at each iteration
    //6. create temp array to hold values
    //7. updates values from original index to random index
    //8. pushes to temp array


const shuffleArr = (arr) => {
    arr.shift
    for (i=arr.length-1; i>0;i--) {
        const j = Math.floor(Math.random() * (i +1))
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
     return temp
    }
}


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

describe("totalVotes", () => {
    it("takes in an object that contains up votes and down votes and returns the net total of votes.", () => {

    const votes1 = {upVotes: 13, downVotes: 2}
    // Expected output: 11
    const votes2 = {upVotes: 2, downVotes: 33}
    // Expected output: -31

expect(totalVotes(votes1)).toEqual(11)
expect(totalVotes(votes2)).toEqual(-31)
})
})

//GOOD PASS! YAY! 
//ReferenceError: totalVotes is not defined 


// b) Create the function that makes the test pass.

//PsudoCode:
    //1. Create a function (totalVotes)
    //2. Take each value (Objects.values)
       //3. add values together (.reduce)


    const totalVotes = (obj) => {
       return Object.values(obj).reduce((a,b) => a-b)
    }




// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.


describe("combArr", () => {
    it("", () => {

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

expect(combArr(dataArray2, dataArray1)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
})
})

//GOOD PASS! YAY! 
// ReferenceError: combArr is not defined

// b) Create the function that makes the test pass.

//PsudoCode:
    //1. Create a function (combArr)
    //2. combine both arrays into a songle array (.concat)
    //3. create new array without douplicates (new Set)


const combArr = (arr1, arr2) => {
    dataArray3 = []
    dataArray3 = [...new Set(arr2.concat(arr1))]
    return dataArray3
}

