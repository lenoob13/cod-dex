// Write code below 💖
/*
Let's use our newfound knowledge of JavaScript loops to create a program that converts an integer into its equivalent binary number.

Note: Binary numbers are "base-2", meaning that they are represented by 0s and 1s.

In a based-numbers.js file, create a program that starts with a myNumber variable, initialized to an integer of your choosing, followed by a binary variable set to an empty string.
*/
let myNumber=10;
let bin="";
while (myNumber>0){
  if (myNumber%2==0){
    bin="0"+bin;
  }else{
    bin="1"+bin;
  }
  myNumber=Math.floor(myNumber/2);
}

console.log(bin);
