//exercise 1
let favoriteFood= "pasta"
let favoriteMeal= "dinner"
console.log("I eat " + favoriteFood + " at every " + favoriteMeal) 

//exercise 2
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength=3
let myWatchedSeriesSentence= "black mirror, money heist, the big bang theory"
console.log ("I watch " + myWatchedSeriesLength + "series before I go to sleep " + ":" + myWatchedSeriesSentence)
myWatchedSeries[2]="Friends"
myWatchedSeries.push("Grey's anatomy")
myWatchedSeries.unshift("catfish")
myWatchedSeries.splice(1,1)
console.log(myWatchedSeries[1][3])
console.log(myWatchedSeries)

//exercise3
let celsiusT= 100
let fahrenheitT= celsiusT/5*9+32
console.log(celsiusT + "°C " + "is " + fahrenheitT + "°F")
//console.log(fahrenheitT)

//exercise 4
let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: it will be 55 because a and b are numbers
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: it will be 23 since the value of a has changed
// Actual: 23

console.log(3 + 4 + '5');
// Prediction: it will be 75 since were adding numbers to string- 3+4=7, 7+"5"=75
// Actual: 75

//exercise 5
console.log(typeof(15))
// Prediction: it will return a number 
// Actual:number

console.log(typeof(5.5))
// Prediction: it will return a number
// Actual:number

console.log(typeof(NaN))
// Prediction:nan
// Actual:number

console.log(typeof("hello"))
// Prediction:string
// Actual:string

console.log(typeof(true))
// Prediction: string
// Actual:boolean

console.log(typeof(1 != 2))
// Prediction:true
// Actual:boolean

console.log("hamburger" + "s")
// Prediction:hamburgers
// Actual:hamburgers

console.log("hamburgers" - "s")
// Prediction:hamburger
// Actual:nan

console.log("1" + "3")
// Prediction:13
// Actual:13

console.log("1" - "3")
// Prediction:Nan
// Actual:-2

console.log("johnny" + 5)
// Prediction:undefined
// Actual:johnny5

console.log("johnny" - 5)
// Prediction: undefined
// Actual:Nan

console.log(99 * "hello")
// Prediction:undefined
// Actual:Nan

console.log(1 != 1)
// Prediction:false
// Actual:false

console.log(1 == "1")
// Prediction:true
// Actual:true

console.log(1 === "1")
// Prediction:true
// Actual:false

//exercise 6

console.log(5 + "34")
// Prediction:534
// Actual:534

console.log(5 - "4")
// Prediction:Nan
// Actual:1

console.log(10 % 5)
// Prediction:0.5
// Actual:0

console.log(5 % 10)
// Prediction:0.5
// Actual:5

console.log("Java" + "Script")
// Prediction:JavaScript
// Actual:javascript

console.log(" " + " ")
// Prediction:""
// Actual:" "

console.log(" " + 0)
// Prediction:0
// Actual:0

console.log(true + true)
// Prediction: true
// Actual:2

console.log(true + false)
// Prediction: true
// Actual:1

console.log(false + true)
// Prediction:true
// Actual:1

console.log(false - true)
// Prediction:Nan
// Actual:-1

console.log(!true)
// Prediction:false
// Actual:false

console.log(3 - 4)
// Prediction:-1
// Actual:-1

console.log("Bob" - "bill")
// Prediction:nan
// Actual:nan