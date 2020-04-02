let arr = [];
for(let i = 0; i < 100; i++){
    arr[i] = Math.floor(Math.random() * 100 + 1);
}
function compare(a, b){
    return a - b;
}
arr.sort(compare);

console.log(arr);