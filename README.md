# FEW 2.5 Working with Data

## Answering questions with Data

The values in a dataset tell a story. Reading the story is the process of sorting, filtering, and looking at the data in different ways.

## Learning Objectives

- Use JS to calculate aggregate values
- Use JS to find median value
- Identify values in a dataset
- Extract data from a dataset using: map filter and reduce
- Calculate the maximum, minimum, and average values

## What will you turn in?

Your job is to clone this repo and solve the challenges below. Test your solutions by running the unit tests. 

After solving the challenges below push your work to GitHub, then submit your work.

## Getting started

This example code uses Jest as the test runner. Install it with: 

`npm  install`

## Run the tests 

Then run the tests: 

`npm test`

Write your code, and run the tests to see if your methods are working. The tests will all fail at the start. Your goal is to make each method return the expected value. 

## Challenges 

Take a look at `challenges-1.js`. This file has some functions stubs where you will add your own code. Each of these functions takes one or more parameters. 

All of the functions take `data` as the first parameter. This parameter will be the data from `titanic-passengers.json`. Given the Titanic data the goal of your code is to return the relevant values. Add helper/utility functions if you like.

Some of the functions take another parameter such as the class a passenger traveled in or their gender. You might be asked to find the number of passengers that match this parameter. 

Later we will be using libraries to handle some of these operations for us. For this assignment you should write the code yourself with vanilla JS to get an idea of what is going in those libraries. Think of these problems as practice for interview questions. 

Each of the function stubs in `challenges-1.js` has a comment describing what the function should look for and return. Your job is to write the code to make this happen.

Run the test suite to check your work. The tests will pass your functions return the correct value. 

## Looking at the Titanic JSON

The data from the Titanic dataset is stored as an array of objects. Each object in the array has the same fields with different values. 

```JS
[{ // <- Passenger Object begins here
  "datasetid": "titanic-passengers", 
  "recordid": "398286223e6c4c16377d2b81d5335ac6dcc2cafb", 
  "record_timestamp": "2016-09-20T15:34:51-07:00",
  "fields": { // <- Fields begins here
    "fare": 7.3125, 
    "name": "Olsen, Mr. Ole Martin", 
    "age": 40.0,
    "embarked": "S", 
    "parch": 0, 
    "pclass": 3, 
    "sex": "male", 
    "survived": "No", 
    "ticket": "Fa 265302", 
    "passengerid": 155, 
    "sibsp": 0,
    "cabin": "F4"
  } // <- Fields ends here
}, // <- Passenger Object ends here
...
]
```

At the top level, there are four keys

- `datasetid`
- `recordid`
- `record_timestamp`
- `fields`

The first three are not really important to us for these examples. All of the information that is useful to us is held under the `fields` key.

Under `fields` there are the following keys: 

- `fare` - The amount paid for a ticket
- `name` - Name of passenger
- `embarked` - Port of embarkation
  - `"C"` = Cherbourg, `"Q"` = Queenstown, `"S"` = Southampton
- `parch` - # of parents/children aboard
- `pclass` - Passenger class
  - `1` = 1st Class, `2` = 2nd Class, `3` = 3rd Class
- `sex` - Passenger gender
  - `"male"` or `"female"`
- `survived` - Survival
  - `"No"` or `"Yes"`
- `ticket` - Ticket Number
- `passengerid` - Passenger id
- `sibsp` - # of Siblings spouses aboard
- `cabin` - Cabin number 

Not all records have all of the data. Some are missing one field or another. There might some cases where you'll need to filter out records that are missing a value.

## Use map, filter, and reduce to solev these problems

- Map: The map method is crucial because it allows you to transform each element of an array into a new array, based on a provided function. It enables you to apply a specific operation or manipulation to every item in an array, returning a new array of the same length. By using map, you can efficiently perform operations like modifying values, extracting specific properties, or even creating entirely new objects from the original array.
- Filter: The filter method is essential when you want to selectively extract elements from an array based on a condition. It takes a function that evaluates each item, and if the function returns true, the item is included in the resulting array. This enables you to easily create new arrays containing only the elements that satisfy a particular criteria, such as filtering out certain values, finding specific patterns, or removing unwanted data from a dataset.
- Reduce: The reduce method is a powerful tool for performing aggregations or calculations on an array of values. It applies a function against an accumulator and each element of the array, reducing the array to a single value. With reduce, you can efficiently compute sums, products, averages, or any other complex calculations by sequentially processing the array elements. It allows you to solve problems that require iterating over the array and maintaining a running total or accumulating data.

These three methods, map, filter, and reduce, are vital in JavaScript programming as they provide elegant and concise ways to transform, filter, and aggregate data within arrays. They promote code readability, reusability, and enable you to write more declarative and functional-style code. Mastering these methods empowers you to write cleaner, more efficient, and expressive JavaScript code.

Map, filter, and reduce abstract the most common array manipulation operations into easy to use functions. 

## Use Array.filter() to find matching records

Use `Array.filter()` to find records that have a matching value. Filter returns a new array with only the matching items. 

If you need a count you can use the length of the new array. 

Examples: 

```JS
// Find passengers by gender 
const malePassengers = data.filter((passenger) => {
  return passenger.fields.sex === 'male'
})

malePassengers.length // number of male passengers
```

Filter expects you to return true if you want to include the record in the filtered array or false if the record should not be included. 

In the sample above `passenger.fields.sex === 'male'` evaluates to true this passenger is included in the filtered array. 

## Use Array.reduce() to get a single value from all records

Use `Array.reduce()` to reduce an array to a single value. Reduce takes array and creates a single value from all of the elements in the Array. 

```JS
// Find the total of all fares paid
const totalFares = data.reduce((acc, passenger) => {
  return acc + passenger.fields.fare
}, 0)
```

If we remove the code in the callback from the example above it would look like this: 

```JS
const totalFares = data.reduce((acc, passenger) => { ... }, 0)
```

Notice the last parameter: `0`. Important! This is needed here since it defines the starting value used by reduce. 

Notice the callback passed into to reduce. 

```JS
(acc, passenger) => {
  return acc + passenger.fields.fare
}
```

The callback takes two parameters: `acc` and `passenger`. The first: `acc` is the accumulator, or running total. While the second: `passenger` is passenger object from the array. The return value is the accumulator plus the fare the passenger paid. 

The return value becomes the new accumulator the next time the function is run. 

## Use Array Map to transform an array

Array Map is used to transform an array. Use it to turn an array of one kind into an array of another kind. For example, the data array us an array of objects, to find the max and min values we need an array of numbers. The code below does this: 

```JS 
const allFares = data.map(passenger => passenger.fields.fare)
const maxFare = Math.max(...allFares)
```

The second line uses `Math.max()` to find the greatest value. This method takes a variable number of parameters, for example: 

```JS
Math.max(56, 23, 78, 94)
```

The `...` is the spread operator, use it to break an array apart into seprate parameters. 

```JS
Math.max(...[56, 23, 78, 94])
```

NOTE! If fare is missing for a passenger the array returned from map will contain an undefined value: `[56, 23, undefined, 78, ...]` this can lead to problems! Try filtering for the missing values first! 

## Use reduce to turn a collection into a single value

Reduce looks at each element of an array and accumulates a value. For example image you wanted the total fares paid on the Titanic: 

```JS
const totalFare = data.reduce((acc, p) => acc + p.fields.fare, 0)
```

It's import to understand the reduce has two parameters. The first is the callback, and the second is the initial value for the accumulator! 

The callback takes two parameters, the first is the accumulator, and the second is current value from the array. 

## Using map, filter, and reduce together

You will want to use map, filter, and reduce together. For example, the Titanic data is missing some values. Some ages and fares are unknown, you'll want to filter the undefined values.

For example you might want to get the average age. To do this you migth: 

- map ages to create a list of all ages
- filter the ages to remove missing undefined (missing data)
- reduce to get a total of all ages
- divide the total by the number of passengers

```JS
const allAges = data.map(p => p.fields.age)
const filteredAges = allAges.filter(age => age !== undefined)
const totalAge = filteredAges.reduce((acc, age) => acc + age, 0)
const averageAge = totalAge / filteredAges.length
```

Since map and filter return an array you chain your calls to make for shorter code. 

```JS
const totalAges = data.map(p => p.fields.age).filter(age => age !== undefined).reduce((acc, age) => acc + age, 0)
```

This leaves the problem of calculating the average, since the number of ages was not calculated. The example shows how the map, filter, and reduce can be called from the return value of the previous function. 

## Evaluating your work

Evaluate your work against the rubric.

| Aspect | Does not meet | Meets | Exceeds |
|:-------|:--------------|:------|:--------|
| **Completion** | Did not complete the challenges | Solved all challenges | Solved stretch challenges |
| **Code quality** | Does not follow coding best practice, the style inconsistent | Code is consistently styled and follows coding best practice, you used a linter | Code reviewed by peer |

### Learing Objectives 

Evaluate your knowledge of the learning objectives agains the rubic below. 

| Aspect | Does not meet | Meets | Exceeds |
|:-------|:--------------|:------|:--------|
| **Identify Values in Titanic Dataset** | Can't identify values in the Titanic dataset | Can identify values in the Titanic dataset | Feel confident you could identify values in any dataset |
| **Extracting Data** | Can't extract data and derive values from the Titanic dataset | Can extract relevant values from the Titanic Dataset | Could extract values from any dataset |
| **Deriving Values** | Can't derive a count, min, and max values from a dataset| Can get the min, max, and count from a dataset | Could derive range, average, and other values from data provided in the Titanic dataset |
