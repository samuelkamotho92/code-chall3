"use strict"
let Dolphins = [44,23,71];
let Dolphins2 = [85,54,41];
let DolphyWeights = 0;
let AvergeDolyphy;

//Dolyphins weight Average
const calcAverageD = (Dolphy)=>{
for(let i = 0; i < Dolphy.length; i++){
DolphyWeights +=  Dolphy[i];
AvergeDolyphy = DolphyWeights/Dolphy.length;
}
return AvergeDolyphy;
}
let DolyphinAW = calcAverageD(Dolphins2);
// : Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
console.log( DolyphinAW);

//Koalas weight
let Koalas = [65,54,49];
let koalas2 = [23,34,27];
let KoalasWeights = 0;
let AvergeKoalas;

//Dolyphins weight Average
const calcAverageK = (Koalasy)=>{
for(let i = 0; i < Koalasy.length; i++){
KoalasWeights +=  Koalasy[i];
AvergeKoalas = KoalasWeights/Koalasy.length;
}
return AvergeKoalas;
}
let koalasAW = calcAverageK(koalas2);
console.log(koalasAW);

//compairing the weights

const checkwinner = (A,B)=>{
return A >= B*2 ? `Koalas win (${A}vs. ${B})`:B >= A ? `Dolphins win (${B} vs ${A})`:`NO WINNER`
};
console.log(checkwinner(koalasAW,DolyphinAW));