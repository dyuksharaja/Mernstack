import React, { useEffect, useState } from 'react'

const Form = () => {
    const[formData,setFormdata]=useState({
        email:"",
        password:""
    })
    function handleChange(e){
        setFormdata({...formData,[e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        console.log(formData);
    
    }
  return (
    <div>
        <form>
            <label>Email:</label>
            <input type="text" name="email"value={formData.email} onChange={handleChange}/>
            <br/>
            <br/>
            <label>Password:</label>
            <input type="password" name="password"value={formData.password} onChange={handleChange}/>
            </form>
            <button onClick={handleSubmit}>Submit</button>
        
    </div>
  )
}

export default Form