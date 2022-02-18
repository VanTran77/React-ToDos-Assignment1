import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

export default class AddTodo extends Component {
    state = {
        task: '',
        description: ''
    }
    
    handleOnChangeTask = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleAddTask = () => {
        if(!this.state.task){
            // this is null / empty / undefine == false
            toast.error("Please input your task")
            return;
        } else {
            
            const todo = {
                id: uuidv4(),
                task: this.state.task,
                description: this.state.description,
            }
            this.props.addNewTodo(todo)
            this.state.task = '';
            this.state.description = '';

        }
    }

    render() {
        return (
        <div>
            <label>Task</label>
            <br/>
            <input type="text" name="task" value={this.state.task} 
                onChange={this.handleOnChangeTask} placeholder="Please input task"
            />
            <p/>
            <label>Description</label>
            <br/>
            <input type="text" name="description" value={this.state.description} 
                onChange={this.handleOnChangeTask} placeholder="Please input description"
            />
            <p/>

            <button className="btn btn-primary btn-sm addTodo" type="submit" onClick={this.handleAddTask}>Add Todo</button>
        </div>
        )
    }
}
