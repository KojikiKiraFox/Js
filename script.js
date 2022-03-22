'use strict'

//hard 1
    
let text = prompt('skolko', 2000);
let num;
const getNum = function(a) {
    if (false == isNaN(a)) {
        num = Number(a)
    } else {
        text = prompt('skolko', 2000)
        getNum(text)
    }
}
console.log(getNum(text));
console.log(typeof num);
console.log(num);

//hard 2-1

const arr = ["43523", "3243425", "231234", "435234", "9324213", "23241432", "64352134"]

for (let i = 0; i < arr.length; i++) {
    if(arr[i].startsWith('2') || arr[i].startsWith('4')){
        console.log(arr[i]);
    }
    
}

// hard 2-2

let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) {
    let j
  for ( j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
}
console.log(i, "Делители этого числа: 1 и ", j);

}