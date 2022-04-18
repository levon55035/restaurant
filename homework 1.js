//1
function izInver(arr) {
    const invertedarr = {};
    for (const key in arr) {
        const value = arr[key];
        invertedarr[value] = invertedarr[value] || [];
        invertedarr[value].push(key);
    }
    return invertedarr;
}
swapMap({a: "1", b: "2", c: "2"})


//2
function areEqualShallow(a, b) {
    for(var key in a) {
        if(!(key in b) || a[key] !== b[key]) {
            return false;
        }
    }
    for(var key in b) {
        if(!(key in a) || a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
let a={}

let b={}



//3
function isUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (i !== j && arr[i] ===arr[j]) {
         
            return false;
        }
      }
    }
    return true;
  }

  //4
  function isIso(str) {
    let NewStr = str.toLowerCase();
    for (let i = 0; i < NewStr.length; i++) {
      for (let j = i + 1; j < NewStr.length; j++) {
        if (NewStr[i] === NewStr[j]) {
          return false
        }
      }
    }
    
    return true;
  }


  //5
  let arr = [2, 5, 6, -7, 12, 15, 0, 3, -8, 9];
let max = getMaxValue(arr);
let min = getMinValue(arr);
let m=[]
function getMaxValue(arr){
    let max = arr[0]; 
    for (let i = 0; i < arr.length; i++) { 
        
        if (max < arr[i]) max = arr[i]; 
    }
   
    return max;
}
function getMinValue(arr){
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }
    return min;
}

for (var i = min; i < max; i++) {
  if (arr.indexOf(i) == -1) {
    m.push(i);
  }
}


console.log(m);


console.log(m.length);