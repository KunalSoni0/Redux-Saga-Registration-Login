import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

interface IState {
  people:{
      name:string
       age:number //optional
      // url?:string
      // note?:string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name:"Kunal",
      age:25
    },
    {
      name:"Harry",
      age:29
    },
  ])
console.log(people)
    // people.map(people=>{
    //     people.age;
    // })

  return (
    
    <>
    <Router>
      {/* <List people={people}/> */}
          <Routes>
            <Route path="/login" element={<Login/>}>
            </Route>
            <Route path="/registration" element={<Register/>}></Route>
            <Route path="/" element={<Header title="TypeScript" color="green"/>}></Route>
          </Routes>
    </Router>
    </>
  );
}

export default App;
