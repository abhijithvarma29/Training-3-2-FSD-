//Find the maximum number among given values

// let a=Number(prompt("Enter first number"));
// let b=Number(prompt("Enter second number"));
// let c=Number(prompt("Enter third number"));
// if(a>b && a>c){
//     console.log("Maximum number is",a);
// }else if(b>a && b>c){
//     console.log("Maximum number is",b);
// }else if(c>a && c>b){
//     console.log("Maximum number is",c);
// }else{
//     console.log("All numbers are equal");
// }

//switch
let a=Number(prompt("Enter first number"));
let b=Number(prompt("Enter second number"));
let c=Number(prompt("Enter third number"));
switch(true){
    case a>b && a>c:
        console.log("Maximum number is",a);
        break;
    case b>a && b>c:
        console.log("Maximum number is",b);
        break;
    case c>a && c>b:
        console.log("Maximum number is",c);
        break;
    default:
        console.log("All numbers are equal");
}