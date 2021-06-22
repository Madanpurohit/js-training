//P1
let pricesData = require('./data/problem-data1.js')

//@TODO
// 1. Remove all duplicate elements from above SORTED array on the basis of price date and create another array having only unique elements. Print the same.
//@CONSTRAINTS
// 1. This has to be done with minimal time complexity
// 2. No restriction on space complexity


// P2
let pricesData = require('./data/problem-data2.js')
//----- DO NOT MODIFY ANY CODE ABOVE THIS LINE -----

//@TODO
// The above file contains prices data for an instrument for past 6 years. We have to...
// 1. Calculate simple moving average of (ie. average of last n number of records) for every day for a period of past 25 records. - SMA25
// ie. for each date calculate the avg of past 25 records. And add it to a new array -> [{date, average}]
//@CONSTRAINTS
// 1. This has to be done with minimal time complexity
// 2. No restriction on space complexity


// P3


let pricesData = require('./data/problem-data3.js')
//----- DO NOT MODIFY ANY CODE ABOVE THIS LINE -----


function selectBestPrice(valueDate) {

}
//@TODO
// The above file contains prices data for an instrument for past 6 years. We have to...
// 1. Implement a function called as selectBestPrice which takes in date as a parameter and returns the priceof that day.
// 2. If the price of a particular day is not present in the prices array, use the previous latest previous price. 
// Eg. if price for 25-Dec-2020 is not present, use price of 24th Dec 2020. If even thats not present, use 23rd Dec 2020 and so on.
//@CONSTRAINTS
// 1. This has to be done with minimal time complexity
// 2. This has to be done with minimal space complexity

//----- DO NOT MODIFY ANY CODE BELOW THIS LINE -----
console.log('The price for date 2020-01-01 is :' + selectBestPrice(new Date('2020-01-01')));


// P4

let pricesData = require('./data/problem-data3.js')

// @TODO :
// Group prices by month of price date
// Output: {"jan": [{price, priceDate}...], "feb": [{}]}