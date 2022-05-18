import React from 'react';
import './style.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';
import Color from '../HOC/Color';

class TodoList extends React.Component {
    state = { 
        arrTodoList: [
            {id:1, title:'Playing game'},
            {id:2, title:'Doing homework'},
            {id:3, title:'Do exercise'}
        ],
        editTodo: []
    }

    addNewTodo = (newTodo) => {
        this.setState({
            arrTodoList: [...this.state.arrTodoList, newTodo],
        })
    }
    deleteTodo = (todo) => {
        let currentTodo = this.state.arrTodoList;
        currentTodo = currentTodo.filter(item => item.id !== todo.id); 
        this.setState({
            arrTodoList: currentTodo
        })
    }
    editTodo = (todo) => {
        let editTodo = this.state.editTodo;
        let isEmptyObject = Object.keys(editTodo).length === 0;
        
        
        if(isEmptyObject === false && editTodo.id === todo.id) {
            let arrTodoListCopy = [...this.state.arrTodoList];

            let objIndex = arrTodoListCopy.findIndex((item => item.id === todo.id));

            arrTodoListCopy[objIndex].title = editTodo.title;

            this.setState({
                arrTodoList: arrTodoListCopy,
                editTodo: {}
            });
            toast.success("Update successfully");
            return;
        }

        this.setState({
            editTodo: todo
        });
    }
    editInput = (event) => {
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render(){
        const {arrTodoList, editTodo} = this.state;
        let isEmptyObject = Object.keys(editTodo).length === 0;

        return(
            <>
                <div className="todo-container">
                    <AddTodo 
                        addNewTodo = {this.addNewTodo}
                    />
                    <div className="list-result-todo">
                        {arrTodoList && arrTodoList.length > 0 && arrTodoList.map((item,index)=>{
                            return (
                                <div className="result-todo" key={item.id}>
                                    {isEmptyObject === true ?
                                    <span>{index + 1} - {item.title}</span>
                                    :
                                    <>
                                        {editTodo.id === item.id ? 
                                            <span>{index + 1} - <input value={editTodo.title} onChange={(event) => this.editInput(event)}/></span>
                                            :
                                            <span>{index + 1} - {item.title}</span>
                                        }
                                    </>
                                    }
                                    <button
                                    onClick={() => this.editTodo(item)}>
                                        {isEmptyObject === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                                    </button>
                                    <button
                                    onClick={() => this.deleteTodo(item)}>Delete</button>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
            </>
        )
    }
}

export default Color(TodoList);