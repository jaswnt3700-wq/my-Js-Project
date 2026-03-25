// Comparing same type data types no issue

// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1)
// console.log(2!=1)

//Issue raisd when we compare different type of data types

// console.log("2">1)
// console.log("02">1)


// console.log(null>0)
// console.log(null==0)
// console.log(null>=0) // value conversion problem here


// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined<0);


// In java script comparison and equality check are both different things.


//***************STRICT CHECK  ===(will not allow conversion) **************************** */

// Will check not only value also check data type.

console.log("2"==="2") // here it will not check only NOt only check value also check the its data type.
console.log("abc"==="abc")
