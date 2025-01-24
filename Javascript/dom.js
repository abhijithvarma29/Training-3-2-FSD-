// //document.getElementById

// let element = document.getElementById("demo");
// element.innerText = "DOM"
// console.log(element);

// let div=document.getElementById("test");
// // div.innerText = "<h1>header</h1>" 
// div.innerHTML = "<h1>header</h1>"
// console.log(div);

//!documnent.getElementsByclassName

// let ele = document.getElementsByClassName("test");
// // console.log(ele);
// // console.log(Array.isArray(ele));
// ele[0].style.backgroundColor = "yellow";
//..............
// //SPREAD OPERATOR:- it is used to take out every value from original array and store it in one more array(pure array)
// //syntax:- [...variable]
//..............
// let x=[...ele];
// console.log(x, Array.isArray(x));
// x.map((element)=>{
//     // console.log(element);
//     element.style.backgroundColor = "blue";
// })

//!document.getElementsByTagName
//-----------------------------
// let ele = document.getElementsByTagName("div");
// console.log(ele);

// !document.getElementsByName
// ---------------------------
// let ele=document.getElementsByName("username");
// // console.log(ele);
// [...ele].map((element)=>{
//     // console.log(element);
//     element.style.backgroundColor = "green";
// })

//!document.querySelector
// -----------------------
// let ele = document.querySelector("#demo")
// console.log(ele);

// let ele = document.querySelector(".test")
// console.log(ele);

// let ele = document.querySelectorAll(".test");
// // console.log(ele);
// [...ele].map(element=>{
//     console.log(element.innerText);
// })

//!EVENTS
//-------
// let btn = document.getElementById("btn");
// // btn.addEventListener("events", callbackfnc)
// // btn.addEventListener("click",()=>{
// //     console.log("Button clicked")
// //     document.body.style.backgroundColor = "blue";
// // })

// let btn=document.getElementById("btn");
// btn.addEventListener("dblclick",()=>{
//     document.body.style.backgroundColor = "blue";
//     // btn.innerText = "Button Clicked"
// })

// let btn = document.getElementById("btn");
// btn.addEventListener("mouseover", () => {
//     document.body.style.backgroundColor = "yellow";
// })
// btn.addEventListener("mouseleave", () => {
//     document.body.style.backgroundColor = "red";
// })

// let inp=document.querySelector("#inp");
// inp.addEventListener("keydown",()=>{
//     console.log("key pressed down");
// })
// inp.addEventListener("keyup",()=>{
//     console.log("key pressed up");
// })


