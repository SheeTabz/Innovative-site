import React, { useState } from 'react'

function FormInput() {
    const[name, setName] = useState({
        firstName: '',
        lastName: '',
    })
  return (
   <form>
    <h1>FILL IN THE FORM</h1>
    <label > FirstName : 
    <input type="text"
    name="firstName"
    value={name.firstName}
    onChange={(e)=> setName({...name,firstName: e.target.value})}
    />
    </label><br/><br/>
    <label> LastName : 
    <input type="text"
    name="lastName"
    value={name.lastName}
    onChange={(e) => setName({...name,lastName: e.target.value})}
    />
    </label>
     <h3>Welcome {name.firstName}  {name.lastName}</h3>
   </form>
  )
}

export default FormInput