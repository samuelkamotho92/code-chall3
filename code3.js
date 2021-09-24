const marksBMI  = {
    name:"mark",
    mass:78,
    height:1.69
};
const johnsBM1  = {
    name:"John",
    mass:92,
    height:1.95
};

let BMI;
const calcBMI = (M,H)=>{
BMI =  Math.trunc(M/H**2);
return BMI;
}
let marksfBMI = calcBMI(marksBMI.mass,marksBMI.height)
console.log(marksfBMI);
let johnsfBM1 = calcBMI(johnsBM1.mass,johnsBM1.height)
console.log(johnsfBM1);
const comparisonBMI = (A,B)=>{
   return A > B ?
`John's BMI (${A}) is higher than Mark's (${B})!`:
`marks's BMI (${B}) is higher than johns's (${A})!`;
}
console.log(comparisonBMI(johnsfBM1,marksfBMI));