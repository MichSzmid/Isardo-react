import React, {useState} from 'react'
import RegisterForm from './Components/Main/RegisterForm'
import Students from './Components/Main/Students'

function App(props) {
  const [userLoggodenIn, setUser] = useState(props.userLoggedIn);

  function content() {
    if(userLoggodenIn) {
      console.log('ptak');
      return <Students/>
    } 
    else if(!userLoggodenIn) {
      console.log('srak');
      return <RegisterForm isLoggedIn={userLoggodenIn}/>
      // class--hidden
    }
  }
  return (
    <>
    {content()}
    </>
  );
}
//login-poster-left
export default App;
