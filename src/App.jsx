

import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar';
import SignIn from './components/signin';

const getLocalStorage = () =>{
  return localStorage.getItem('user') ? JSON.parse(localStorage.getItem("user")) : []
};

function App() {
  const [user, setUser] = useState(getLocalStorage())
  const [isSignIn, setSignIn] = useState(false);
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');


  const handSignIn = (e) => {
    e.preventDefault();
    const  newUser = {title:name, mail:email};
    setUser ([...user, newUser  ]);
  };
   
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])
  

  return (
    <>
      <Navbar isSignIn={isSignIn} setSignIn = {setSignIn} />
      {isSignIn && <SignIn
      name={name}
        setName={setName}
        email = {email}
        setEmail = {setEmail}
        handSignIn={handSignIn}
/>}
    </>
  )
}

export default App
