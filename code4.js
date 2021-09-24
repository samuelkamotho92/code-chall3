"use strict"
let bills = [2,295,176,440,37,105,10,1100,86,52];
console.log(bills[bills.length-1]);
let tips = [];
let totals = [];

    // return billed >= 50  && billed <= 300 ? 15/100 * billed : 20/100* billed;

const calcTipped = (bill)=>{
    for(let i = 0; i < bill.length; i++){
    tips.push(bill[i] >= 50  && bill[i] <= 300 ? 15/100 * bill[i] : 20/100 * bill[i]);
    totals.push(tips[i]+ bills[i]);
    }
    console.log(tips);
    console.log(totals);
}
calcTipped(bills);

let sum = 0;
let Average;
const calcAverage = (Array)=>{
for(let i = 0; i < Array.length ; i++){
sum += Array[i];
Average = sum/Array.length
console.log(Average);
}
}
calcAverage(totals)


