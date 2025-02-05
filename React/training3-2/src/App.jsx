// import React from 'react'
// const App = () => {
//   return (
//     <div>
//         <div>Hello Welcome to React App</div>
//         <p>Lorem ipsum dolor si.</p>
//     </div>
//   )
// }
// export default App

// //!component composition example
// import Navbar1 from './components/Navbar1';
// import Main from './components/Main';
// import Sidebar from './components/Sidebar';
// import Sidebar2 from './components/Sidebar2';
// import Footer from './components/Footer';
// const App=()=>{
//   return(
//     <div className='app'>
//       <Navbar1/>
//       <Main></Main>
//       <div className='sidebar'>
//         <Sidebar></Sidebar>
//         <Sidebar2></Sidebar2>
//       </div>
//       <Footer/>
//     </div>
//   )
// }
// export default App;

//!props
//?Class component
// import React from 'react'
// import CBCPropex1 from './propsexample/CBCPropex1';

// class App extends React.Component {
//   render() {
//     return (
//       <CBCPropex1 
//       username="Sam"
//       age={25}
//       desig={["developer","tester"]}
//       userdetails={{city:"Hyd", area:"maisammaguda"}}
//       sendFun={function(){
//         alert("Hi, I am from parent component")
//       }}
//       />
//     )
//   }
// }
// export default App;

//?Funtional component
// import React from 'react'
// import FBCPropex from './propsexample/FBCPropex'

// const App = () => {
//   return (
//     <div>
//       <FBCPropex
//         username="Abhi"
//         isLoggedIn={true}
//         // isLoggedIn={false}
//         hobbies={["watching movies","Listening music"]}
//       />
//     </div>
//   )
// }

// export default App

//!props children example
// import React from 'react'
// import PropsChildrenex from './propsexample/PropsChildrenex'
// import Childprops from './propsexample/Childprops'

// const App = () => {
//   return (
//     <div>
//       <PropsChildrenex username="abhi" company="Meta">
//         <h1>This data is passed as props children</h1>
//         <Childprops/>
//       </PropsChildrenex>
//     </div>
//   )
// }

// export default App

//!Props Drilling
// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

export default App