import { takeEvery, put, call } from "redux-saga/effects";
import { actionIds, RegisterType } from "../types/actionType";

function* handleRegister( registration:any) {

    try {
        localStorage.setItem('registration', JSON.stringify(registration.payload));
        var registrationData : any = localStorage.getItem('registration');
        let data  = JSON.parse(registrationData);
        yield put({ type: actionIds.GET_USERS, users:data});
    } catch (err) {
        yield put({ type: actionIds.GET_USERS_FAILED, message: err });
      }
    
  }


function* handleLogin() {

     try {
         console.log("login")
         var registrationData : any = localStorage.getItem('registration');

        let data  = JSON.parse(registrationData);
        yield put({type:actionIds.GET_LOGIN, loginData:data})
        console.log("data:",data)
        // if(data.email === login.email && data.password === login.password){
        //     alert("Login Successfull")
        // }else{
        //     alert("Invalid Credentials")
        // }
     } catch (err) {
        yield put({ type: actionIds.GET_USERS_FAILED, message: err });
      }
    
  }



function* UserSaga() {
    yield takeEvery(actionIds.GET_USER_REGISTER, handleRegister);
    yield takeEvery(actionIds.GET_USER_LOGIN, handleLogin);

}

export default UserSaga;

