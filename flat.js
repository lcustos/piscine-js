const arr1 = [0, 1, 2, [3, 4]];

function flat(array, int){
    let array2 = [];
    for (let i in array){
            if (int === 0){
                return array
            }else if (typeof array[i] === "object"){
                for (let element in flat(array[i],int-1)){
                    array2.push(flat(array[i],int-1)[element])
                }
            }else{
                array2.push(array[i])
                console.log(array2)
            }
    }
    return array2
}

console.log(flat(arr1,1))