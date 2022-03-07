// function return

/*
function sumTwoNumber(a, b) {
  return a != b;
}

var sum = sumTwoNumber(3, 5);
console.log(sum);

*/

//iseven Fuction
//out ever : true
//else : false

function iseven(num) {
  if (num % 2 === 0) {
    console.log("this is number even");
  } else {
    console.log("this is not even ");
  }
}
// console.log(iseven());

// how to anystring first and any accureance

function getstring(string) {
  return string[(0, 2)];
}

// console.log(getstring("abcdefjg"));

// input : array
//problem statement : find the number in array present if its avaible then print the indexof numbeer another print -1

function myArray(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return i;
    }
  }
  return -1;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const anystring = myArray(arr, 7);
console.log(anystring);


//fuction expration 
const sum = fuction(a,b){
return  a + b ;

}
console.log(twoNumberSum(2,4));