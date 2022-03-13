1
let numbers =[1,12,4]
let length = 0
for (let i of numbers){
	length++
}
console.log(length)




2
let arr = [-1, 0, 1, 2];
let total = 0;
for (let i in arr) {
  total += arr[i];
}
console.log(total)

3
let number1 = 0;
let number2 = 150;
for(;number1 <= number2;number1++){
	if(IsPowerOfTwo(number1)){
        console.log(number1)
    };
}


function IsPowerOfTwo(tiv) { 
    if(tiv == 0) return false
   if(tiv == 2 || tiv == 1) return true
   if(tiv % 2 == 0) {
     return  myFunction(tiv / 2)
   } else {
       return false  }
}

4
  console.log(insertHyphen('25468'));

  function insertHyphen(str) {
    var strArr = str.split('');
    var numArr = strArr.map(Number);
    for(var i = 0; i < numArr.length; i++) {
     if(numArr[i-1]%2===0 && numArr[i]%2===0) {
          numArr.splice(i, 0, '-');
      }
    }
    
    return numArr.join('');
  }


5
let givenNumber = 14
let i = 1
let array = []
for(;array.length < givenNumber;i++){
    if(isNumberPrime(i)){
        array.push(i)
    }
}
console.log(array[givenNumber - 1])

function isNumberPrime(number) {
    if(number == 1) {
        return false
    }
    let i = 2;
    for(;i<number;i++) {
        if(number % i == 0){
            return false
        }
    } 
    return true
}
