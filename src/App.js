import React, {Component} from 'react'
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/layout/Header';
import ListTodo from './components/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  
  state = {
    todos: [
      {
        id: uuidv4(),
        task:'Doing Homework',
        description: 'Wash clothing',
      },
      {
          id: uuidv4(),
          task: 'Reading Documents',
          description: 'Basic React',
      },
      {
          id: uuidv4(),
          task: "Practicing Coding",
          description: 'State & Props',
      }
    ]
  }

 
  addNewTodo = (todo) => {
    this.setState({todos: [...this.state.todos, todo]}) 
    console.log(this.props.todos);
    toast.success("Task was added")
  }

  delTodo = (id) => {
    console.log(id)
    this.setState({todos: [...this.state.todos.filter(todo => todo.id != id)]});
    toast.success("Delete success!")
  }

  render(){
    return(
        <div className="App">
          <div className="container">
            <Header />
            <ListTodo todos={this.state.todos} 
                      addNewTodo={this.addNewTodo}
                      delTodo={this.delTodo}
            />
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            {/* Same as */}
          <ToastContainer />
        </div>
    );
  }
}

export default App;
