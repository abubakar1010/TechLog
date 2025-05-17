const arr = [1,2,3]

const result = arr.reduce( (acc, curr,index) => {

    acc.push( acc[index-1]? acc[index-1] + curr : 0 + curr)
    return acc
},[])

console.log(result)