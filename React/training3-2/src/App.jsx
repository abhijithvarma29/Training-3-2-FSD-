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
import React from 'react'
import CBCPropex1 from './propsexample/CBCPropex1';

class App extends React.Component {
  render() {
    return (
      <CBCPropex1 username="Sam"/>
    )
  }
}
export default App;
