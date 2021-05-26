function positiveSum(arr) {
    let bendraSuma = 0;
      for (let i =0; i < arr.length; i++) {

          const index = arr[i];
          
          if (index > 0) {
            bendraSuma += index;
        }
        
  }
  return bendraSuma;
}



console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);