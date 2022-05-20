import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component {
    
    handleDelete = (user) => {
        this.props.deleteUserRedux(user);
    }

    handleAdd = () => {
        this.props.addUserRedux();
    }

    render(){
        const listUsers = this.props.dataRedux;

        return (
            <div>
                <h1>Hello World!</h1>
                <div>
                    {listUsers && listUsers.length > 0 && 
                    listUsers.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {index + 1} - {item.name}
                                &nbsp; <span onClick={() => this.handleDelete(item)}>x</span>
                            </div>
                        )
                        })
                    } 
                </div>
            </div>

            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({type: 'DELETE_USER', payload: userDelete}),
        addUserRedux: () => dispatch({type: 'ADD_USER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);