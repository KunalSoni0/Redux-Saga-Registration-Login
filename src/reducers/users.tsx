import { JsxElement } from "typescript";
import { actionIds, RegisterType} from "../types/actionType";
const initialState = {
      userData:{}
        //   fname:"k",
        //   lname:"s",
        //   comname:"cre",
        //   email:"k@gmail.com",
        //   password:"kun",
        //   cpassword:"kun"
      ,
      loading:false,
      error:null
  };

export const users = (state=initialState, action:any) => {

    const { type, users} = action;
    //console.log("action of users:", action)
    console.log("hello:",{...state,
        userData:{
            ...state.userData, users:users
        }})
    switch (type) {
		case actionIds.GET_USERS:
            // console.log("action:", type, users)
            return{
                // ...state.userData, ...action.users
                ...state,
                userData:{ ...state.userData, users}
            }
       
        case actionIds.GET_USERS_FAILED:
            return { ...state, loading: false, error: action.message };
                
		default:
			return {...state.userData};
            
	}
    
}





//case "GET_USER_REGISTER":
//    // console.log("get user register called.", action);
    //     return{
    //         ...state.userData, ...action.users
    //}


