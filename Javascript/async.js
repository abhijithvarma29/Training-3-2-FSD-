// console.log(10);
// console.log(20);
// setTimeout(()=> {
//     console.log(30);
// },2000);
// console.log(40);
// console.log(50);
// // setInterval(()=>{
// //     document.writeln("MRUH")
// // },1500)

// //PROMISE
// let p1=new Promise((resolve,reject)=>{})
// console.log(p1);

// let p2=new Promise((resolve,reject)=>{
//     resolve("Success");
// });
// console.log(p2);
// p2.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>console.log("Finally"));

let p3=new Promise((resolve,reject)=>{
    reject("Failure");
});
// console.log(p3);
p3.then((data)=>{console.log(data);})
.catch((error)=>{console.log(error)})
.finally(()=>console.log("Finally"));