console.log("hello world")

// var x= 5// vi bruker ikke var lengre

// const name = "emil"

// let firstname = "emil"// string
// let age = "30"  //integer/number
// let examplefloa = 30.2 // float
// let frombergen = true // boolean
// let exampleArray = ["mazda" ,"opel","saab","mitsubishi"]// kan ha nummer variable med flere items

// let myObject = {
//   firstname: "torleif",
//   lastname:"leiknes",
//   age: 67,
//   email: "torleif@leiknes.no"
// }
//let ab = 
// datatyper
// string - "tekst"
//boolean - true/ false
//null - nullverdi
//undefined _ ukjent  udefinert
// object - samling av informasjon som omhandler en ting
// array _ liste over ting 

//console.log(myObject) // HUSK!! alltid
//console.log(exampleArray)

//console.log(examplefloat)
//let x = 11
//let y = 4

//x++ //increment
//console.log(x)


//let z = x + y
//console.log(z)

// operators

let a = 10
let b = 15 
console.log (a + b)
console.log (a - b)
console.log (a / b)
console.log (a * b)
console.log (a % b)

// comparsion opperator
let x =10
let y = 20
console.log(x > y) //større enn
console.log(x < y) // mindre enn
console.log(x == y) // sjekker om det er samme
console.log(x === y) // strictly equal to
console.log (x !== y) // is not equal to
console.log ( x <= y ) //mindre eller lik
console.log(x >= y ) //større eller lik

// logical operTORS / eller operators
let ervoksen = true
let barneskole = false

console.log (ervoksen && ! barneskole)

// condititonals


const age = 17 

if ( age >= 18 )
{ console.log("vellkommem inn")
}
else { console.log ("get lost")}
let firstName = " tjollof"
let numberofcats = 7
if (numberofcats>= 20 && firstname ==="magda" )
 {console.log ("you have too many cat")}
 else if (numberofcats <= 10 && firstName === "tjollof" ) 
   {console.log ("right person, not enogh cats")  }
 else {console.log ("hvor er kristin")}


 let user = {   username : "dj sjur" ,
    userage : 49 ,
    usercity : "sandfjord"
  }
  if (user.username === "per")
    {console.log("welcome per")}
  else if  ( user.userage <=18 )
  {console.log ( "you not old")}
  else if (user.username === "dj sjur" && user.usercity === "sandfjord")
{console.log ( "velkommen dj fra sandfjord ")}
  else { console.log("banned")}
