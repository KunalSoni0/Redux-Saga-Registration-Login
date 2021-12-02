import React,{useState} from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux"
import { handleLog} from "../actions/index"

export interface IStateLog {
    email:string 
    password:string 
}


const Login = () => {

    const loginStyle={
        backgroundImage: `url("https://www.w3schools.com/css/img_mountains.jpg")` ,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height:"100vh"
    }

    const formStyle:any={
        position: "absolute",
        left:"10%",
        top:"30%"
    }


    const [login, setLogin] = useState<IStateLog>({email:"", password:""})

    const onChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        setLogin({...login, [e.target.name]:e.target.value})
    }

    const dispatch = useDispatch();
    
    //const loginData = useSelector((state:any) => state.userLogin)   
    
    const handleLogin = (e: React.FormEvent)=>{
        e.preventDefault();

        dispatch(handleLog())
       // console.log("login:",loginData)
        var registrationData : any = localStorage.getItem('registration');

        let data  = JSON.parse(registrationData);
         if(data.email === login.email && data.password === login.password){
            alert("Login Successfull")
        }else{
            alert("Invalid Credentials")
        }
        setLogin({ email:"", password:""})
    }

    return (
        <div className="row container-fluid" style={loginStyle}>
            <div className="col-sm-6 col-md-6" style={formStyle}>
                <h1 style={{textAlign:"center", fontSize:"25px"}}>Login</h1>
                
                <form onSubmit={handleLogin}>
                {/* <div className="row">
                    <div className="col-6"> */}
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" value={login.email} onChange={onChange}  required/>
                    {/* </div>
                    
                </div> */}
                {/* <div className="row">
                    <div className="col-6"> */}
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={login.password} onChange={onChange}  required/>
                    {/* </div>
                </div> */}
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                
                </form>
                <p style={{display:"inline-flex"}}>
                <i style={{marginTop:"3%"}}>Don’t have an account?</i>
                <Link className="nav-link text-danger" aria-current="page" to="/registration">Sign Up</Link>
                </p>
            </div>
        </div>
    )
}

export default Login

