"use strict"
let bill= 100;
let tips = [];
let mthbills =  [ 125, 555 ,44];
const calcTip = (billed)=>{
return billed >= 50  && billed <= 300 ? 15/100 * billed : 20/100* billed;
}
console.log(calcTip(bill));

const mthlyTips = (mthtipp)=>{
for(let tipp = 0; tipp < mthtipp.length; tipp++){
return tips.push(mthtipp[tipp] >= 50  && mthtipp[tipp] <= 300 ? 15/100 * mthtipp[tipp] : 20/100 * mthtipp[tipp]);
}
console.log(tips);
}
mthlyTips(mthbills);

