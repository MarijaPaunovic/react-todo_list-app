import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    getStyle = () => {

        // long way
        // if(this.props.todo.completed) {
        //     return {
        //         textDecoration: 'line-through'
        //     }
        // } else {
        //     return {
        //         textDecoration: 'none'
        //     }
        // }

        // short way
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.markComplete.bind(this, id)} /> {'   '}
                    { title }
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}> x </button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    border: 'none',
}

export default TodoItem;
