// arrays in ts >>

type numberarr = number[];
//or
//type stringarr = string[];

function maxVal(arr : numberarr) {
    let max = 0 ;
    for(let i = 0 ; i <arr.length ; i ++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
    
}

const ans = maxVal([1,2,3]);
console.log(ans);
