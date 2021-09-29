let prevSum = 0;

let sum = function(a){
  if (!a) return prevSum;
  return function(b){
    if(b) {
      prevSum = a+b;
      return sum(a+b);
    }
    return a;
    }
} 

console.log(sum(1)(2)(3)(4)()); //10
console.log(sum()); //10
console.log(sum(1)(2)(3)(5)()); //11
console.log(sum()); //11
