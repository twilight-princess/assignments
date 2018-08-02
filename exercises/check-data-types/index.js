function checkTypes(arr) {  
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i]
    for (let j = 0; j < current.length; j++) {
      
    }
  }
}

const multiD1 = [[1,2,3],["a","b","c"],[true, true, true]]  
checkTypes(multiD1)  
// returns false (inner arrays aren't consistent with each other's data types)

const multiD2 = [[true,false,true],[false,false,true]]  
checkTypes(multiD2)  
// returns true (each inner array contains the same data type as the others)