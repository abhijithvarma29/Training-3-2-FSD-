// let x=document.createElement("h1");
// x.innerText="Dynammic creation of html element from JS";
// // console.log(x);
// x.setAttribute("id", "demo");
// // console.log(x);
// document.body.appendChild(x);

// let image=document.createElement("img");
// image.src="./burger.png";
// // console.log(image);
// // document.body.appendChild(image);

// let form=document.querySelector("form");
// let nameInput=document.querySelector("#uName");
// let emailInput=document.querySelector("#uEmail");
// let passwordInput=document.querySelector("#uPassword");

// form.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     // console.log(event);
//     // // console.log("Form submitted");
//     // console.log(name.value);

//     let name=nameInput.value;
//     let email=emailInput.value;
//     let password=passwordInput.value;
//     let userDetails={
//         name:name,
//         email:email,
//         password:password
//     }
//     console.log(userDetails);
//     localStorage.setItem("userDetails",JSON.stringify(userDetails));
// })

//!dynamic elements

// let mainEle=document.createElement("div");
// mainEle.setAttribute("class", "MainBlock");
// // console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("class" , "topBlock");
// // console.log(topEle);

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class" , "bottomBlock");
// // console.log(bottomEle);

// let imgEle = document.createElement("img");
// imgEle.src = "https://cdn.pixabay.com/photo/2025/01/17/16/06/building-9340309_1280.jpg";
// imgEle.width = "300";
// imgEle.height = "300";

// let h1=document.createElement("h1");
// h1.innerText="Heading";
// // console.log(h1);

// let buttonEle = document.createElement("button");
// buttonEle.innerText="More Info";
// // console.log(buttonEle);

// bottomEle.appendChild(h1);
// bottomEle.appendChild(buttonEle);
// topEle.appendChild(imgEle);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);

let form = document.querySelector("form");

let username = document.getElementById("uName");

let password = document.getElementById("uPass");

let gen = document.getElementsByName("gender");

form.addEventListener("submit", event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    // console(un, up);
    let gender="";
    for(let i=0;i<gen.length;i++){
        if(gen[i].checked){
            // console.log("true", gen[i].value)
            gender+=gen[i].value;
        }
    }

    let userDetails={
        un,up,gender
    };
    console.log(userDetails);
})