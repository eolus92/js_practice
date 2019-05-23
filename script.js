//################################
// VARIABLES
//################################

// var firstName, 
//     lastName, 
//     height, 
//     married;

// firstName = "Peter";
// lastName = "Dinklage";
// height = 132;
// married = true;


// married = 32;

// console.log(firstName, lastName, height, married);

//#####################################################
// OPERATORS
//#####################################################

// var yearOne = 1830;
// var yearTwo = 1830;

// var a = 45;
// var b = 60;

// var married = false;

// console.log(!married);

// var a = 20;
// var b = 40;

// console.log(a > b - 30)

// var a = b = 5;

// console.log(a, b)


//######################################
//DATA TYPES
//######################################

///////////////PRIMITIVE DATA TYPES 

// var a = 10;

// var b = a;

// b=20;

// console.log(a,b);

// var a = {
// 	name: "Peter",
// 	lastName: "Dinklage"
// }


// var b = a;

// b.name = "Tyrion";

// console.log(a,b);

//tipovi podataka
///1.STRING
// var a = "Some \ 'text here";

// console.log(a);

///2.NUMBER
///3.BOOLEAN

// true and false

///4.UNDEFINED

// console.log(a);

///5.NULL

//////////////REFERENCE DATA TYPES 

//1.Objects 

// 	var a= {
// 	name:"Peter",
// 	lastName:"Dinklage"
// }

//2. Arrays 

// var a = [true, "Peter", 1990];

//3.Function

// function changeName(n) {
// 	console.log(n)

// }

// changeName(1990);
// changeName(1950);

/////////////////////////

//TYPEOF operator

/////////////////////////

// var a = "35";

//   console.log(typeof a === "number");

///////////////////////////////
//HOW CAN WE JOIN TWO STRINGS ?
///////////////////////////////

// var name = "Peter";
// var lastName = " Dinklage"

//   console.log(name + lastName);

/////////////////////////////
///TYPE COERCION
////////////////////////////

  // var a = 35;
  // var b = " years old.";

  // console.log("John is " + a + b);


///***** JS CONDITIONALS *****/////

//////////////IF / ELSE STATEMENT:

// var name = "Peter";
// var status = "married";

// if (status === "married" ) {
// 	console.log("Peter is" + " " + status)
// } else {
// 	console.log ("Peter is single")
// }

// var name = "Peter";
// var status = "married";

// if (43>45 ) {
// 	console.log("Peter is" + " " + status)
// } else {
// 	console.log ("Peter is single")
// }

  // var a = 45;

  // if (typeof a === "number") {
  //   console.log(a + " is number")
  // }
  // else {
  // 	console.log(a + " is not a number")
  // }

  
// var a = 30;
//   var b = 35;

//   if (a > b) {
//     console.log(a + " is more than " + b);
//   } else if (a === b) {
//     console.log(a + " is equal to " + b);
//   } else {
//     console.log(a + " is less than " + b);
//   }

//#############################
//************************ARRAY
//#############################

//                 var someData = [true, 34, [34, 56], "Peter"]; 

//var someData = [];
//console.log(someData);


//                    var someData = new Array(12, ["Peter", 1934], true);

// //console.log(someData[1], someData[0]);

// //console.log(someData[1][0]);

// //console.log(someData.length - 1);

// //someData[0] = 10;

// //console.log(someData)

// // someData[someData.length] = false;
// // console.log(someData)

// // someData[1][someData[1].length] = false;
// // console.log(someData)

// // someData[5] = false;
// // console.log(someData)

// delete someData[1];
// console.log(someData)

//#############################
//************************LOOPS
//#############################

//WHILE

// var someData = new Array(12, ["Peter", 1934], true);
// var newArr = [];
// var i = 0;

//   // while (i < someData.length) {
//   //   console.log("This is some text " + someData[i]);
//   //   i++;
//   // }

//  while (i < someData.length) {
//     newArr[i] = someData[i];
//     i++;
// }

// someData[0] = 13;

// console.log(newArr)

// DO WHILE
// var i = 0;

// do {
//   console.log("Something")
//   i++;
// } while (i < 10);



//FOR LOOP 

// for (var i = 0; i < 10; i++ ) {
// console.log("Something " + i)

// }

// console.log(i)



// var names = ["John", "Peter", "Mike"];

//   for (var i = 0; i < names.length; i++) {
//     console.log("His name is " + names[i]);
//   }


// var names = ["John", "Peter", "Mike", "Jim"];

//   for (var i = 0; i < names.length; i++) {
//     console.log("His name is " + names[names.length - 1 - i])
//   }

// var names = ["John", "Peter", "Mike", "Jim"];

//   for (var i = names.length - 1;i >= 0; i--) {
//     console.log("His name is " + names[i])
//   };

////////////////////////////////////////////////////CAN WE NEST FOR LOOPS 

// var someValue = 0;

//   for (i = 0; i < 4; i++){
//       for (j = 0; j < 4; j++){
//           someValue++;
//       }
//   }

//   console.log(someValue)

/////////////////////////////////////HOW CAN WE BREAK OUT OF LOOP 

// var names = ["John", "Peter", "Mike", "Jim"];

//   for (var i = 0; i < names.length; i++) {
//     if (i===2) {
//     continue;
//    }
//     console.log("His name is " + names[i])
//   };


// var names = ["John", "Peter", "Mike", "Jim"];

//   for (var i = 0; i < names.length; i++) {
//     if (names[i]==="Mike") {
//     continue;
//    }
//     console.log("His name is " + names[i])
//   };

  // var names = ["John", "Peter", "Mike"];

  // for (var i = 0; i < names.length; i++) {
  //   if(names[i]==="Mike") {
  //     break;
  //   }
  //   console.log(His name is  + names[i]);
  // }


