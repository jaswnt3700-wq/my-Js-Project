// Objects & browser event most important topics Mastry these two modules

// Two types of Data types //

// Primitives & Non-Primitives(reference type)

//#Primitives (7) types: String, Number, Boolean, null(empty not zero), undefined(Only defined variable) Symbol(Unique) Bigint


// #Non- Primitive or Reference Type Data types


// JS is dynamically types language.

const score = 100
const scoreValue= 200.4
const isLoggedIn = false
const outsideTemp= null
let userEmail;

const id = Symbol('1234')
const anotherId= Symbol('1234')

//console.log(id===anotherId);

const bigNumber=123456789987456321n  // Bigint consider





//Array, Objects, functions


const heros = ["Shakrtiman", "Gangadhar", "Superman"];

{
    name: "Jaswnt";
    age : 35;

}

const myFunction = function(){
    console.log("Hello jaswnt")

}
// console.log(typeof heros)

// console.log(typeof myFunction)

//********************************************************************** */

// stack memory for primitive type - Copy System means new copy ban jaandi h

        ///STATCK MEMORY////
        ////////////////////datatype5
        ////////////////////datatype4
        /////////////////// datatype3
        ///////////////////// datatype2
        ///////////////////  dataype 1
       
        let newName = "jaswnt@gmail.com"

            let anotherName="name"
                console.log(anotherName)
                anotherName="johhn@yahoo.com"

                    console.log(newName)
                    //console.log(anotherName)



// Heap memory for Non-Primitive type - Refernce share hunda h. Original values v change ho jandi h e.g. House Address

/////////////////////////////
//                         //
//      HEAP MEMORY        //
//                         //
//                         //
//                         //
////////////////////////////

let userOne=  {

 emailId:"jaswnt@gmail.com",
 password:"asc123",
 upiID:"abc@sbiok"

}

console.log(userOne)

let userTwo=userOne
userTwo.emailId="jaswnt@yahhooooo.com"
console.log(userOne)
console.log(userTwo)




