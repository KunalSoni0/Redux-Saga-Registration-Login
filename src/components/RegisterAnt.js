import React ,{useState} from 'react'
import { Form, Input, Button } from "antd"
import { useDispatch, useSelector } from 'react-redux'
import  { handleRegistration } from "../actions/index"
import {RootStore} from "../store";
import { users } from '../reducers/users';



const RegisterAnt = () => {
  
    const dispatch = useDispatch();

    const uData = useSelector((state) => state.users.userData);
     
    console.log("UserAnt:",uData)
    const handleSubmitt = (data) => {
        console.log("Data : ", data);
        let registration = {
            fname:data.fname,
            lname:data.lname,
            comname:data.comname,
            contact:data.contact,
            email:data.email, 
            password:data.password,
            cpassword:data.cpassword
        };
        console.log(registration)
        dispatch(handleRegistration(registration));
     }

    return (
        <div className="container">
            <h1>Users First Name : {uData?.fname}</h1>
            {/* {uData && uData.map(user=>{
                <h1>{user.fname}</h1>
            })} */}
            <Form onFinish={handleSubmitt}>
                <Form.Item label="first name" name="fname">
                    <Input placeholder="first name"/>
                </Form.Item>
                <Form.Item label="last name" name="lname">
                    <Input placeholder="last name"/>
                </Form.Item>
                <Form.Item label="company name" name="comname">
                    <Input placeholder="company name"/>
                </Form.Item>
                <Form.Item label="contact" name="contact">
                    <Input placeholder="contact"/>
                </Form.Item>
                <Form.Item label="email" name="email">
                    <Input placeholder="email"/>
                </Form.Item>
                <Form.Item label="password" name="password">
                    <Input placeholder="password"/>
                </Form.Item>
                <Form.Item label="cpassword" name="cpassword">
                    <Input placeholder="cpassword"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default RegisterAnt;
