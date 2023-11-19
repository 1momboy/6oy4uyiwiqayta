

export default function Navbar( {isSignIn, setIsSignIn} ) {
  return (
    <div>
        <ul className="nav">
            <li className="navbar-item">logo </li>
            <li className="navbar-item">about </li>
            <li className="navbar-item">contact </li>
            <li className="navbar-item">
                <button onClick={() => setIsSignIn(!IsSignIn)  }     >
                    sign in</button>
                 </li>

        </ul>
    </div>
  )


}
