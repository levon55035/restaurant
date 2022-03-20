//1
let arr=[]
let a=10
let b=100
a<=b
let i=20
for (;a<=b;a+=i){
   
arr.push(a)
}
console.log(arr)

//2
let str='another string'
var count=0
let a = str.indexOf('t')
while(a != -1){
   count++
    a=str.indexOf('t',a+1)
}console.log(count)

//3

let str='T'
let patasxan = "yes"
if(str.length == 0) {
    patasxan = "no"
}
for(let i=0;i<str.length/2;i++){
    if(str[i]!==str[str.length-i-1]){
        patasxan = "no"
      break 
    }
}
console.log(patasxan)

//4
let arr = [1,4,43,-112]
let max = 0
for(let i=0;i<arr.length;i++){
if(arr[i]>max){
    max = arr[i]
}
}
console.log(max)


//5
let arr=[3,7,12,5,20,0]
let arr1=[]
for(let i=0;i<arr.length-1;i++){
    arr1.push(arr[i]*arr[i+1])

}console.log(arr1)

//6

let str='The results are not recorded yet'
let str1=''
for(let i=0;i<str.length;i++){
if(str[i]==='t'){
    str1+='w'
}else{str1+=str[i]}
}


//7
let a=0
let k=9
for(let i=0;i<k;i++){
    if(i<k/2+0.5){
        a=a*10+i+1
        console.log(a)
    }else{
        a=Math.floor(a/10)
        console.log(a)
    }
}