var a = 40;
var b = 30;
var c = 30;

// if(a > 35 && b > 35 && c > 35){
//     console.log(a+b+c);
    
// }

let sum = 0;

if(a > 35){
    // sum += a;
    sum = sum + a;
}
if(b > 35){
    sum += b;
}
if(c > 35){
    sum += c;
}

console.log(sum);
