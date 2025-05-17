function sumOfArray(arr ,index ){
    if(index >= arr.length){
        return 0;
    }

    return arr[index] + sumOfArray(arr, index+1)
}

console.log(sumOfArray([1, 2, 3, 4], 0));