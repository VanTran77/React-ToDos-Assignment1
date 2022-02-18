import React, { Component } from 'react'

export default class DelTodo extends Component {
    handleDelTodo = () => {
        let id = this.props.id
        // console.log(id);
        this.props.delTodo(id);
    }

    render() {
    return (
      <button className="btn btn-warning btn-sm" type="submit" onClick={this.handleDelTodo}>Done</button>
    )
  }
}
