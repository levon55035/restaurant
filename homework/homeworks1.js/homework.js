//1

let arr= [2, 12, 15, 48, 64]
function izIndexSorting(arr){
     for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            return i+1
        }
    }
    return -1
}

//2
let arr=[[3, 4, 5], [1, 0, 0], [4, 5, 4], [8, 8, -1]]
let arr1=[]

function sumRum(arr){
    
    for(let i=0;i<arr.length;i++){
        let sum=0
        for (let j=0;j<arr[i].length;j++) {
            sum =sum+ array[i][j]
          
        }
        arr1.push(sum)
        
    }
}


//3
let arr = [5, 4, 78, 0, -3, 7];
let arr1=[];
let result=arr.filter(elem => elem % 2 !== 0) ;
arr1=result.map(elem=>elem*result.length);


//4
function sumDig(velue){
	let sum=0;
	while(velue!=0){
         
         sum+= velue % 10;
        velue = Math.floor(velue / 10);
}
      return sum;
}
function sumDigRecur(velue){

    if(value < 10) {
		return value;
	}else{
		return sumDigRecur(sumDig(velue));
	}
}

// 5
// var fib = function(n) {
//  if (n === 1) {
//      return [0, 1];
//     } else {
//       var arr = fib(n - 1);
//       arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//       return arr;
//     }
//   };
//5
function fibRekur(num){
    if(num===0){
        return [];
    } else if (num===1){
        return [0,1];
    }else{
        let arr=fibRekur(num-1);
         arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
      return arr;
    }
}