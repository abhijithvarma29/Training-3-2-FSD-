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

let form=document.querySelector("form");
let nameInput=document.querySelector("#uName");
let emailInput=document.querySelector("#uEmail");
let passwordInput=document.querySelector("#uPassword");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    // console.log(event);
    // // console.log("Form submitted");
    // console.log(name.value);

    let name=nameInput.value;
    let email=emailInput.value;
    let password=passwordInput.value;
    let userDetails={
        name:name,
        email:email,
        password:password
    }
    console.log(userDetails);
    localStorage.setItem("userDetails",JSON.stringify(userDetails));
})