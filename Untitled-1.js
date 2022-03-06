// 1 For a given number calculate the sum of its digits.
let value = 306,
    sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log(sum)




// 2  
let num1=3
let num2=4
let num3=5
if(num1+num2>num3 && num2+num3>num1&& num1+num3>num2){
	console.log("yes")
}else {
	console.log("no")
}

//3
let i= +prompt("grek tiv?")
let k = 0
if(i===0){
 k=1   
}
for (;i!=0;i-Math.trunc(i/10)){
	i = Math.trunc(i/10)
	k++
}
console.log (k)








//4
let num1=+prompt("grek tiv?")
let num2=0

for(;num1!=0;){
    
if(num1%10==9){
    num2++
}	
num1=Math.floor(num1/10)	
	
}
console.log(num2)





//5
let num1 = 0;
let num2 = 1253;

while(num2 != 0){
	 
  num1 = num1 * 10 + num2 % 10;
  num2 = Math.floor(num2/10);
}

console.log("Reverse number : "+num1)