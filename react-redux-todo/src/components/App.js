import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/Addtodo';
import VisibleTodoList from '../containers/VisibleTodoList';
//import logo from './logo.svg';
//import './App.css';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
