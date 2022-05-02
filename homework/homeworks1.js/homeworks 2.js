let arr = ['a', 'b', 'c', 'd', 'f'];
let i = 0;
 
function removesRecursiv(arr) {
   delete arr[0];
   i++;
   if (i < arr.length) removesRecursiv(arr);
}
 
removesRecursiv(arr)




//2
function flatten(ary) {
    var ret = [];
    for(var i = 0; i < ary.length; i++) {
        if(Array.isArray(ary[i])) {
            ret = ret.concat(flatten(ary[i]));
        } else {
            ret.push(ary[i]);
        }
    }
    return ret;
}

//3
function rotaters(arr){
    arr.unshift(arr.pop())
    return arr
}
function rotatesArr(arr,num){
    if(num===0){
        return arr
    }else{
        num=num-1
        return rotatesArr(rotaters(arr),num)
    }
}


//4

arr.sort(function (a, b) {
    return a.percent - b.percent;
  });
  
  
  arr.sort(function(a, b) {
    const nameA = a.readStatus
    const nameB = b.readStatus
    if (nameA === true) {
      return -1;
    }
    if (nameB===true) {
      return 1;
    }
  
    
    
  })
  //5
  function myMap(obj,fn){
     
    const result={}
    for(let key in obj){
      const resultFromCallBackFunction = fn(this[key],this)
        if (resultFromCallBackFunction){
          result[key] = fn(this[key])
            
            return result
        }
    }
}



  
    
    
