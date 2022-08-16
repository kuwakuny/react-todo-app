import React, { Component } from 'react'
import './App.css'
export default class App extends Component {

    state = {
        todoData: [
            {
                id: '1',
                title: 'study',
                completed: true
            },
            {
                id: '2',
                title: 'clean up',
                completed: false
            },
        ],
        value: ''
    }

    btnStyle = {
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right"
    }

    getStyle = () => {
        return {
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: "none"
        }
    }

    handleClick = (id) => {
        let newTodoData = this.state.todoData.filter(data => data.id !== id)
        console.log('newTodoData', newTodoData)
        this.setState({ todoData: newTodoData })
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let newTodo = {
            id: Date.now(),
            title: this.state.value,
            completed: false
        }
        this.setState({ todoData: [...this.state.todoData, newTodo] })
    }

    render() {
        return (
            <div className="container">
                <div className="todoBlock">
                    <div className="title">
                        <h1>To Do List</h1>
                    </div>
                    {this.state.todoData.map((data) => (
                        <div style={this.getStyle()} key={data.id}>
                            <input type="checkbox" defaultChecked={false} />
                            {data.title}
                            <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button>
                        </div>
                    ))}
                    <form style={{ display: 'flex' }} onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            name="value"
                            style={{ flex: '10', padding: '5px' }}
                            placeholder="write to do"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <input
                            type="submit"
                            value="input"
                            className="btn"
                            style={{ flex: '1' }}
                        />
                    </form>
                </div>
            </div>
        )
    }
}