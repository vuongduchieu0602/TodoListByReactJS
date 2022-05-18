import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        title:"",
    }
    onChangeInput = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    addNewTodo = () => {
        if(!this.state.title){
            toast.warn('Required title', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                });
            return;
        }

        let newTodo = {
            id: Math.floor(Math.random() *1001),
            title: this.state.title
        };

        this.props.addNewTodo(newTodo);

        toast.success('Add successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    render(){
        return (
            <>
                <div className="add-todo">
                        <input 
                            type="text" 
                            value={this.state.title} 
                            onChange={(event) => this.onChangeInput(event)}/>
                        <button 
                            onClick={() => this.addNewTodo()}
                        >Add</button>
                </div>
            </>
        )
    }
}

export default AddTodo;