// վար․ 1
let a = +prompt("grek tiv?")
let b = +prompt("grek tiv?")
if (a < b) {
   let c=a
    a=b
    b=c
}
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
    console.log(a%b)

//վար․2
var myNameis = prompt("What's your name?")
var myAge = prompt("how old are you")

console.log("My name is " + myNameis)
console.log("I am " + myAge)


//վար․3
let nuber=+prompt("greq tiv")
console.log(nuber%10)

//վար․4
let number = prompt("Greq tiv?")
if (number >= 0){
  alert("No")
}else{
  alert("Yes")
}




//վար․5
let Number1=prompt("Greq tiv?")
let Number2=prompt("Greq tiv?")
if(Number1 > Number2){
	if(Number1 % Number2 == 0 ){
		alert("1")
	}else{
		alert("0")
	}
}else {
	if(Number2 % Number1 == 0) {
	alert("1")
    }else {
	alert("0")
    }
}



//վար․6

var Number = +prompt("Greq tiv?")
switch(Number){
	case 1 :{
		console.log("January ")
		break;
	}
	case 2 :{
		console.log("February")
		break;
	}
	case 3:{
		console.log("March ")
		break;
	}
	case 4 :{
		console.log("April ")
		break;
	}case 5 :{
		console.log("May")
		break;
	}case 6 :{
		console.log("June ")
		break;
	}case 7 :{
		console.log("July")
		break;
	}case 8 :{
		console.log("August")
		break;
	}case 9 :{
		console.log("September ")
		break;
	}case 10 :{
		console.log("October")
		break;
	}
	case 11 :{
		console.log("November ")
		break;
	}case 12 :{
		console.log("December")
		break;
	}
}



//վար․7
let num1=prompt("grek tiv")
let num2=prompt("grek tiv")
let num3=prompt("grek tiv")
if( num1 >= num2 && num1 >= num3){
	alert(num1 +"is maximum")
}else if(num2 >= num1 && num2 >= num3){
	alert(num2 +"is maximum")
}else{
	alert(num3 +"is maximum")
}