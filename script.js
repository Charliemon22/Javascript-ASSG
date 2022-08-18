/*alert("hello world")
console.log(40+2)*/

//Topic 3:Values and variables
// console.log("Ayo")
// console.log(100)

// let firstName ="Ciroma";
// let lastName ="Adekunle";

// console.log(firstName, lastName)

// // Number
// let Pi = 3.142;
// let highScore =350;

// console.log(typeof Pi)

// // String
// let playerName = "Ayo";
// console.log(typeof playerName)

// // Boolean

// let isRaining = true;
// console.log(typeof isRaining)

// Undefined
// let myName;
// console.log(typeof myName)

// Null
let box = null;
console.log(typeof box);

// Symbol
// values that cannot be changed

// BigInt

// Dynamic typing
// this means it automatically detects the data type of a value,you dont have to write string in words before the value like in Java

let myName = "Ayo";
myName = 100;
console.log(myName);

// ====>LET, CONST, VAR
// let age = 35;
// age =37;
// mutate -> to change
// console.log(age)

// let score;
// console.log(score);
// score = 30;
// console.log(score);

// const birthYear = 2000;
// console.log(birthYear);

// You cannot create an empty CONST variable

// Var
var job = "programmer";
job = "teacher";
console.log(job);

// Basic Operators
// mathematicals
// console.log(5+7)
// console.log(5-7)
// console.log(5*7)
// console.log(5/7)

// const currentYear =2022;

// const ageDumebi = currentYear - 2000;
// console.log(ageDumebi);
// const ageCiroma = currentYear - 2005;
// console.log(ageCiroma);

// console.log(ageCiroma*2, ageDumebi/2)

const firstName = "Ciroma";
const lastName = "Adekunle";

console.log(firstName + " " + lastName);

// typeof operator
console.log(typeof "hello");

// assignment operator
// const x = 10+5;
// console.log(x);
// +=
// -=
// *=
//  /=
// x+=5  //x= x + 5 (this will be an error cos we used const,changing it to let,makes it works)

// let y = 20;
// y -= 5;
// console.log(y)

// y+1 can also be written as y++,y-1 can also be written as y--

// comparison operators

// const currentYear =2022;

// const ageDumebi = currentYear - 2000;
// console.log(ageDumebi, "Dumebi's age");
// const ageCiroma = currentYear - 2005;
// console.log(ageCiroma);

// const isDumebiOlder = ageDumebi > ageCiroma;
// console.log(isDumebiOlder)
// console.log(6 < 7)
// console.log(6 > 7)
// console.log(6 == 7)
// console.log(7 >= 5)
// console.log(currentYear - 2000 > currentYear - 2005 )

// Operator Precedence

// Template literals(Template)

console.log(`my first name is ${firstName} and my last name is ${lastName}`);
console.log(`I woke up with ${500} and I'm going to bed with ${500 - 200}`);

// if/else statements

// const age = 17;
// const isOldEnough = age >=18;


// console.log(isOldEnough)

// if(age >= 18){
//     console.log(`come and have your driver's license`)
// }
// else{
//     console.log(`come back in ${18-age} years(s) time`)
// }

// const isRaining = true;

// if(isRaining){
//     console.log(`Get an Umbrella`)
// }
// else{
//     console.log(`you are good!`)
// }

// Type conversion and type coercion

// CONVERSION

// const birthYear = "2000"

// console.log(typeof birthYear + 20)

// COERCION

const word1 = 5;
const word2 = "eggs";
const stringedWords = word1 + word2;
console.log(typeof stringedWords);

console.log("23" - "10" - "3");
console.log("23" - "10" + "3");
let n = "1" + 1;
n = n - 1;
console.log(n);

console.log("4" - 3 - 2 + "5");

// TRUTHY AND FALSY VALUES
// 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("Ayo"));
console.log(Boolean(2));
console.log(Boolean(undefined));

const isRaining = "drizzling";

if (isRaining) {
  console.log(`Get an Umbrella`);
} else if (isRaining == "drizzling") {
  console.log("get a Raincoat");
} else {
  console.log(`you are good!`);
}

const money = 0;

if (money) {
  console.log("don't spend it all");
} else {
  console.log("Get a JOB!");
}

let height = 0;
if (height) {
  console.log("Yea, height is undefined");
} else {
  console.log("height is undefined");
}

// Equality Operators  == and ===
let age = 18;

//  ===(strict equality operator)
//  ==(loose equality operator)

if (age === "18") {
  console.log("Adult");
} else {
  console.log("Something happened");
}

// 18/08/22

// const favoriteNumber = Number(prompt("Enter your favorite number"))
// if(favoriteNumber === 20){
//     console.log('yaay,thats my favorite number!')
// }else if(favoriteNumber === 50){
//     console.log("50 stands for Jubilee!")
// }else if(favoriteNumber === 100){
//     console.log("100 stands for century")
// }
// else{
//     console.log('Provision was not made for this input/number')
// }

// if (favoriteNumber !== 20){
// console.log("why not 20")
// }

// Boolean logic
// And , Or, Not ==>>logical operators

const isDarkSkinned = true;
const isHausa = false;

console.log(isDarkSkinned && isHausa);
console.log(isDarkSkinned || isHausa);
console.log(!isHausa && isDarkSkinned);

// Switch statement

const day = "Monday";

// switch (day){
//     case "Monday":
//          console.log("I plan for the course structure");
//          console.log("Monday is my least favorite day");
//          break;
//      case "Tuesday":
//         console.log("Today is Tuesday");
//         break;
//      case "Wednesday":
//         console.log("Today is Tuesday");
//         break;
//      case "Thursday":
//      case "Friday":
//         console.log("This is my favorite day");
//         break;
//      case "Saturday":
//         console.log("Today is Tuesday");
//         break;
//      case "Sunday":
//         console.log("Today is Tuesday");
//         break;
//       default :
//       console.log("day is invalid!") ;

// }

if (day === "Monday") {
  console.log("Today is Monday");
} else if (day === "Thursday" || day === "Friday") {
  console.log("This is my fave day");
} else if (day === "Wednesday") {
  console.log("It's wed");
} else if (day === "Tuesday") {
  console.log("This is Tuesday");
} else if (day === "Sunday") {
  console.log("Today is Sunday");
} else {
  console.log("Invalid");
}

// coding challenge 2

// let massCiroma = 78;
// let heightCiroma = 1.69;
// let ciromaFirstBMI = massCiroma/(heightCiroma * heightCiroma);
// console.log(ciromaFirstBMI, "this is ciroma's BMI")

// let massCiroma = 120;
// let heightCiroma = 3.88;
// let ciromaFirstBMI = massCiroma / heightCiroma ** 2;
// console.log(ciromaFirstBMI, "this is ciroma's BMI");

// let massDumebi = 92;
// let heightDumebi = 1.95;
// let dumebiBMI = massDumebi / (heightDumebi * heightDumebi);
// console.log(dumebiBMI, "this is dumebi's BMI");

// const higherBMI =ciromaFirstBMI > dumebiBMI;

// note:if you pur the value of higherBMI in a double quote,it becomes a string(this makes it a truthy value when converted to a boolean,hence even the evaluation is false,the if decision block is executed,TRY IT!)

// console.log(typeof higherBMI)

// if (higherBMI) {
//   console.log(`Ciroma's BMI (${ciromaFirstBMI})is higher than Dumebi's BMI (${dumebiBMI})`);
// } else{
//   console.log(`Dumebi's BMI (${dumebiBMI}) is higher thanCiroma's (${ciromaFirstBMI})`);
// }

// OR
// if (ciromaFirstBMI > dumebiBMI) {
//     console.log(`Ciroma's BMI (${ciromaFirstBMI})is higher than Dumebi's BMI (${dumebiBMI})`);
//   } else{
//     console.log(`Dumebi's BMI (${dumebiBMI}) is higher thanCiroma's (${ciromaFirstBMI})`);
//   }

// ASSIGNMENT
let teamDumebiAverage = (96+108+89)/3;
console.log(teamDumebiAverage);

let teamCiromaAverage =(88+91+110)/3;
console.log(teamCiromaAverage);

if(teamDumebiAverage > teamCiromaAverage){
  console.log("Team Dumebi wins the trophy!")
}else if(teamDumebiAverage == teamCiromaAverage){
  console.log("It is a draw.")
}
else{
  console.log(`Team Ciroma wins the trophy!`)
}


//BONUS 1 


let teamDumebiBonus1 =(97+112+101)/3;
console.log(teamDumebiBonus1);

let teamCiromaBonus1 =(109+95+123)/3;
console.log(teamCiromaBonus1);

let minimumScore = 100;

if(teamDumebiBonus1 > teamCiromaBonus1 && teamDumebiBonus1 >= minimumScore){
  console.log(`Team Dumebi wins`)
}
else if(teamDumebiBonus1 < teamCiromaBonus1 && teamCiromaBonus1 >= minimumScore){
  console.log(`Team Ciroma wins`)
}
else{
  console.log(`No Winner`)
}

// BONUS 2

let teamDumebiBonus2 =(97+112+101)/3;
console.log(teamDumebiBonus2)

let teamCiromaBonus2 =(109+95+106)/3;
console.log(teamCiromaBonus2)

if(teamDumebiBonus2 > teamCiromaBonus2 && teamDumebiBonus2 >= minimumScore) {
  console.log(`Team Dumebi wins`)
}else if(teamDumebiBonus2 < teamCiromaBonus2 && teamCiromaBonus2 >= minimumScore){
  console.log(`Team Ciroma wins`)
}else if(teamCiromaBonus2 === teamDumebiBonus2 && teamCiromaBonus2 >= minimumScore && teamDumebiBonus2 >= minimumScore){
  console.log(`It ends in a draw`)
}
else{
  console.log(`No winner`)
}


