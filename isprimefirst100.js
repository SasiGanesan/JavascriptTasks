
//print the first 100 prime numbers using NAmed function method

function isprime(number) {
  if (number < 2) {
    return 0; }
  else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return 0;
      }
    }
    return 1;
  }
}
var num = 2;
while (num <= 100) {
  if (isprime(num)) {
    console.log(num);
  }
  num++;
}

//print the prime numbers using Anonymous function method

let isprime=function(number){
  if (number < 2) {
    return 0; }
  else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return 0;
      }
    }
    return 1;
  }
}
var num = 2;
while (num <= 100) {
  if (isprime(num)) {
    console.log(num);
  }
  num++;
}

//print the prime numbers using Arrow function 

const isprime=(number)=>{
  if (number < 2) {
    return 0; }
  else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return 0;
      }
    }
    return 1;
  }
}
var num = 2;
while (num <= 100) {
  if (isprime(num)) {
    console.log(num);
  }
  num++;
}
