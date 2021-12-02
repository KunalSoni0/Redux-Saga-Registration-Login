import React,{useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import  { handleRegistration } from "../actions/index"
import {RootStore} from "../index";
//import { users } from "../reducers/users"

export interface IState {
        fname:string
        lname:string
        comname:string
        email:string 
        contact:number 
        password:string 
        cpassword:string
}

const Register = () => {
    
    
    const registerStyle={
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

    // const imgStyle:any={
    //     width:"13%",
    //     position: "absolute",
    //     left:"26%",
    //     top:"10%"
    // }

    const navigate = useNavigate();


    const [credentials, setCredentials] = useState<IState>({fname:"",lname:"",comname:"",contact:0,email:"", password:"",cpassword:""})
    //const [userData, setUserData] = useState({})
    

    const onChange =(e: React.ChangeEvent<HTMLInputElement>) =>{
        setCredentials({...credentials, [e.target.name]:e.target.value})
    }

    const dispatch = useDispatch();
    
    //const users = useSelector((state) => state.users);

    const users = useSelector((state:any) => state.users.userData);
    console.log("users:", users)
    // useEffect(() => {
        
    // }, [userData])
        
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
       // e:React.FormEvent<HTMLFormElement>
        e.preventDefault(); 
        
        
        const registration = {fname:credentials.fname,lname:credentials.lname,comname:credentials.comname,contact:credentials.contact,email:credentials.email, 
            password:credentials.password,cpassword:credentials.cpassword};

        dispatch(handleRegistration(registration));
        // Put the object into storage
        //localStorage.setItem('registration', JSON.stringify(registration));
        
        //console.log(`Registration Successfull ${users?.fname}`)
        setCredentials({fname:"",lname:"",comname:"",contact:0,email:"", password:"",cpassword:""})
      //  navigate('/login');
    }

   // const handleSubmit = () => dispatch(GetPokemon(pokemonName));
    

    return (
        //style={{position:"absolute"}
        <div className="container-fluid" style={registerStyle}>
            <div className="row">
            {/* <img src="https://www.logodesign.net/images/nature-logo.png" style={imgStyle} alt="" /> */}
            <div className="col-lg-6" style={formStyle}>
                <h3>    {users?.fname}</h3>
                {/* {
                    users?.map((user:any)=>{
                        <h1>{user.fname}</h1>
                    })
                } */}
                <h1 style={{textAlign:"center", fontSize:"25px"}} className="mb-2">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-sm-6 col-md-6">
                            <label htmlFor="firstname" className="form-label">First Name</label>
                            <input type="input" className="form-control" id="firstname" name="fname" value={credentials.fname} onChange={onChange} required/>
                        </div>
                        <div className="col-sm-6 col-md-6">
                        <label htmlFor="lastname" className="form-label">Last Name</label>
                        <input type="input" className="form-control" id="lastname" name="lname" value={credentials.lname} onChange={onChange}  required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-6">
                            <label htmlFor="companyname" className="form-label">Company Name</label>
                            <input type="input" className="form-control" id="companyname" name="comname" value={credentials.comname} onChange={onChange} required/>
                        </div>
                        <div className="col-sm-6 col-md-6">
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6 col-md-6">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange}  required/>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <label htmlFor="contactnumber" className="form-label">Contact Number</label>
                            <input type="number" className="form-control" id="contactnumber" name="contact" value={credentials.contact} onChange={onChange} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-6">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange}  required/>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <label htmlFor="confirmpassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmpassword" name="cpassword" value={credentials.cpassword} onChange={onChange}  required/>
                        </div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Do you want to create a Branded App?</label>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">I agree to the Terms and Condtions</label>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3" >Submit</button>
                    {/* onClick={(e)=>handleSubmit} */}
                </form>
                <p style={{display:"inline-flex"}}>
                <i style={{marginTop:"3%"}}>Already have an account?</i>
                <Link className="nav-link text-danger" aria-current="page" to="/login">Login</Link>
                </p>
            </div>
            </div>
        </div>
    )
}

export default Register;

