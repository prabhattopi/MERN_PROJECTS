
import './App.css';
import { useState,useEffect} from 'react';

function App() {
     const [initialValue,setInittialvalue]=useState({
      username:"",
      email:"",
      password:''

     })
     const [error,setError]=useState({})
     const [isSubmit,setisSubmit]=useState(false)

     const Handlechange=(e)=>{
      let {value,name}=e.target
      setInittialvalue({
        ...initialValue,
        [name]:value
      })
      

     }
     const hnadlesubmit=(e)=>{
       e.preventDefault()
       setError(valiadate(initialValue))
       setisSubmit(true)
       
     }
     useEffect(()=>{
 
    if(Object.keys(error).length===0&&isSubmit){
      setInittialvalue({
        email:"",
        password:"",
         username:""
      })
      
    }
    


      
     },[error])

     const valiadate=(values)=>{
      const errrObj={}
      const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(!values.username){
        errrObj.username="Username is requrired!"
        
      }
      if(!values.email){
        errrObj.email="Email is requrired!"

      }
      else if(!regex.test(values.email)){
        errrObj.email="Not a valid email"

      }
      if(!values.password){
        errrObj.password="Password is requrired!"

      }
      else if(values.password.length<6){
        errrObj.password="Password length must be greater than 6"

      }
      else if(values.password.length>10){
        errrObj.password="Password length not to be greater than 10"

      }
         
      return errrObj
     }
  return (
    <div className="container">
      {Object.keys(error).length===0&&isSubmit?<div>Sign in Successful</div>: <pre>{JSON.stringify(initialValue,undefined,2)}</pre>}
     
      <h1>Log In</h1>
      <form onSubmit={hnadlesubmit}>
        <div className="ui divider"></div>
          <div className="ui form">
            <div className="feild">
              <label htmlFor="">Username</label>
              <input type="text" name="username" placeholder='Username' value={initialValue.username} onChange={Handlechange} />

            </div>
            <p>{error.username}</p>
            <div className="feild">
              <label htmlFor="">Email</label>
              <input type="text" name='email'placeholder='Email'value={initialValue.email} onChange={Handlechange}/>

            </div>
            <p>{error.email}</p>
            <div className="feild">
              <label htmlFor="">Password</label>
              <input type="password" name="password" placeholder='Password' value={initialValue.password} onChange={Handlechange}/>
            
          </div>
          <p>{error.password}</p>
          <button type='submit' className='fluid ui button blue'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
