import React from 'react'
import { actionIds } from '../types/actionType';
const initialState = {
    loginData:{
    },
    loading:false,
    error:null
};


const userLogin = (state=initialState, action:any) => {

    const { type, loginData} = action;
    console.log("login:",loginData)
    switch (type) {
		case actionIds.GET_LOGIN:
            return{
                ...state,
                userData:{ ...state.loginData, loginData }
            }
        case actionIds.GET_USERS_FAILED:
            return { ...state, loading: false, error: action.message };
                
		default:
			return {...state.loginData};
            
	}
}

export default userLogin
