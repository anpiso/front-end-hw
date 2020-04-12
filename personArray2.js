let persons1 = [];
let persons2 = [];
for(let i = 0; i < 10; i++){
    persons1[i] = {name: "홍길동", age: 16 + i};
}

for(let i = 0; i < 10; i++){
    persons2[i] = Object.assign({}, persons1[i]);
}

console.log(persons1);
console.log(persons2);