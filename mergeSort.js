
 // get length of array
 // define mid point by divide length of array by two
 // define left half of mid array
 // define right half of mid array


 // create merge function that merges left and right half of arrays

 const mergeSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
  
    const midArr = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, midArr);
    const rightArr = arr.slice(midArr);
  
    return merge(mergeSort(leftArr), mergeSort(rightArr));
  };
  
  const merge = (leftArr, rightArr) => {
    const result = [];
  
    while (leftArr.length && rightArr.length) {
      result.push(leftArr[0] < rightArr[0] ? leftArr.shift() : rightArr.shift());
    }
  
    return [...result, ...leftArr, ...rightArr];
  };
  
  console.log(mergeSort([5, 2, 34, 6, 7, 20, 21]));
  