import React, { Component } from 'react'
import AddTodo from './AddTodo';
import DelTodo from './DelTodo';


export default class ListTodo extends Component {

  render() {
    // console.log(this.props.todos);
    const listTodos = this.props.todos;
    return (
      <div className='listTodoContainer'>
        {/* this.props.addNewTodo is a func form App.js */}
        <AddTodo addNewTodo={this.props.addNewTodo}/>
        <div className="listOfTodo">
          <h1>List of Todo:</h1>
          {listTodos && listTodos.length > 0 && listTodos.map((todo, index) => {
            return(
                  <div key={todo.id} className="list-Todo">
                    <span>{`${index+1}. Task:  ${todo.task}  - Description: ${todo.description}`}</span>
                    {/* this.props.delTodo is a func form App.js */}
                    <DelTodo delTodo={this.props.delTodo} id={todo.id}/>
                  </div>
            )})
          }   
        </div>
      </div>
    )
  }
}
