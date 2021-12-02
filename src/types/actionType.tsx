import { register } from "./storeType"

export interface userLogin {
    type: "GET_USER_LOGIN"
    email:string 
    password:string
}

// export interface userRegistration {
//     type: "GET_USER_REGISTER"
//     registration:
// }


export interface RegisterType{
    type:"GET_USER_REGISTER"
    RegisterData: Register,
  }

export interface GetUser{
  type:"GET_USERS"
  //userData:Register
}

export interface UserFailed{
  type:"GET_USERS_FAILED"
  loading:boolean
}

export interface GetLogin{
  type:"GET_USER_LOGIN"
}
  
  export type Register = {
    registerData: {
        fname:string
        lname:string
        comname:string
        email:string 
        contact:number 
        password:string 
        cpassword:string
    }
  }

  // For Reducers
export interface registeredUser {
	type: "GET_USER_REGISTERED";
	userData: register;
}


export const actionIds = {
    GET_USER_LOGIN:"GET_USER_LOGIN",
    GET_USER_REGISTER:"GET_USER_REGISTER",
    GET_USERS:"GET_USERS",
    GET_USERS_FAILED:"GET_USERS_FAILED",
    GET_LOGIN:"GET_LOGIN",
}

