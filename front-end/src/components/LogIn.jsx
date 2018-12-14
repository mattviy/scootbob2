import React from 'react'
import { Link } from 'react-router-dom';



export const LogIns = [
  {id: "driver",
   name: "Log in as Driver",
   },
  {id: "drinker",
  name: "Log in as Drinker"}
]


export const  LogIn = (props) => {
  var logins = LogIns.map((login, index)=> {
    return(<div key={index} style= {{width: '400px', height:'400px', display: 'inline-block'}}><Link to= {`/LogIn/${login.id}`}><h3> {login.name}</h3></Link></div>
    )
  })
    return(
      <div>
        <h1>Log In</h1>
     {logins}
     <h1 style={{color: 'black'}}>{props.warning}</h1> 
    </div>
  )
  }

  export default LogIn



