// //Without parameters and arguments
// function demo(){//function declaration
//     console.log("Hello i am function");
// }
// demo(); //function calling
//demo();

// //With parameters and arguments
// function add(a, b){
//     // console.log("a=" + a);
//     // console.log("b=" + b);
//     console.log("a + b = "+(a+b));
// }
// add(10,20);
// add(5,6);

// //Palindrome
// function ispalindrome(str){
//     let revstr="";
//     for(let i=str.length-1; i>=0; i--){
//         // console.log(str[i]);
//         revstr+=str[i];
//     }
//     // console.log(revstr);
//     if(str == revstr){
//         console.log("String is palindrome");
//     }else{
//         console.log("String is not palindrome");
//     }
// }
// // let a=prompt("enter a string");
// // ispalindrome(a);
// ispalindrome("sir");
// ispalindrome("madam");
// ispalindrome("malayalam");

// //ANONYMOUS FUNCTION
// function(){
//     console.log("Anonymous function");
// }//cannot be executed independently

// // function expression
// let x=function(){
//     console.log("Function expression");
// }
// // console.log(x);
// x();
// x();

// IIFE(IMMEDIATE INVOKE FUNCTION EXPRESSION)
// (
//     function(){
//     console.log("IIFE");
// }
// )();

//ARROW FUNCTION
// let x=()=>{console.log("Arrow function with ()");}
// x();
// let y=_=>{console.log("Arrow function with _");}
// y();
// let z=a=>{console.log(a)};
// z(10);
// let w=(a,b)=>{console.log(a+b)};
// w(10,20);

// let x=_=>{
//     console.log("hi");
//     console.log("BYE");
//     console.log("HEY");
// }
// x();

//return - implicit and explicit
// function add(a,b){
//     return a+b;//will not print(explicit return)
// }
// // add(5,5)
// let x=add(5,5)
// console.log(x);

// let x=(a,b)=>a+b;//implicit function
// console.log(x(5,5));

// let y=(a,b)=>{return a+b}//explicit return
// console.log(y(10,5));

//higher order function
// function hof(a){
    
//     return a();
// };

//  let x = hof(function(){return "This is callback function"});
//  console.log(x);

// let b =  function(){
//     console.log("Anonymus");
//  };
// b();

// function add(callback){
//     return callback(5,3);
// };
// let x = add(function(a,b){return a+b});
// console.log(x);

// let users = ["Navya" , "Vishnu" , "Keshav" , "Shravan(insta)" , "Shiva"];
// let x = users.map((user)=>{
//     // console.log(user);
//     return user;
// });
// console.log(x);
// let x = users.forEach((user)=>{
//     return (user);
// });
// console.log(x);

// var a =10;
// let b= 30;
// function x(){
//     var user = "Abhijith";
//     let company = "Amazon";
//     const sal = 1234567890;
//     console.log(user);
//     console.log(company);
//     console.log(sal);

//     console.log(a , b);
// }
// x();