import logo from './static/logo.svg';
import './static/App.css';
// import TodoItem from './TodoItem';
// import todosData from './todosData';
import React from 'react';
import Header from './components/Header';

import Nav from './components/Nav';
import Dialogs from "./components/Dialogs";
import Post from "./components/Post";
import Kot from "./components/Kot";
import Pios from "./components/Pios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MyPosts from './components/MyPosts';



function App(props) {
  return ( <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='content'>
      <Routes>
        <Route path="/dialogs" Component={() =><Dialogs DialogsList={props.DialogsList }/>} />
        <Route path="/post"    Component={() => <MyPosts />} />
        <Route path="/kot"     Component={() => <Kot catname={props.catname}/>}/>

        <Route path="/pios"    Component={()=><Pios dogname={props.dogname}/> } />
      </Routes>
      </div>
    </div></BrowserRouter>
  );
}


// function App() {
//   const nashListOfTODO=todosData.map(fordst=>{return(<TodoItem id={fordst.id} text={fordst.text} completed= {fordst.completed} />)})
//   return (<div className="App"> {nashListOfTODO}  </div>);}

// class App extends React.Component {
//   constructor(){
//     super()
//     this.state={
//       todos:todosData
//     }
//     this.handleChange=this.handleChange.bind(this)
//   }


  // handleChange(id){
  //   this.setState(prevState=>{
  //     const updateTodos = prevState.todos.map(todo =>{
  //       if (todo.id === id) {
  //         todo.completed = !todo.completed
  //       }
  //       return todo
  //     })
  //     return { todos:updateTodos  }
  //   })
  // };
  // // completed= {fordst.completed}
  // render(){
  //   const nashListOfTODO=this.state.todos.map(fordst=>{return(<TodoItem id={fordst.id} 
  //     text={fordst.text}  handleChange={this.handleChange}/>)})

  //   return(<div>
  //       {nashListOfTODO} </div>) }};

export default App;
