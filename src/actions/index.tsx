import { IState } from "../components/Register";
import { IStateLog } from "../components/Login"
import { actionIds} from "../types/actionType";


// export const getUsers = () =>{
//     return {
//         type:"GET_USERS_REQUESTED"
//     };
// };


export const handleRegistration = (registration : IState)=>{
    return {
        type:actionIds.GET_USER_REGISTER,
        payload: registration
    }
}

export const handleLog = ( ) =>{
    return {
        type:actionIds.GET_USER_LOGIN,
    }
}

