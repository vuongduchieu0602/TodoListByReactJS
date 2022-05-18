import React from 'react';
import axios from 'axios';
import './ListUser.scss';

class ListUser extends React.Component {
    state = {
        listUsers: [],
    };

    async componentDidMount() {
        // axios.get('https://reqres.in/api/users?page=1')
        //     .then((res) => {
        //         console.log(res.data.data);
        //     })

        let res = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        });
        
    }

    render() {
        let {listUsers} = this.state;
        return (
            <div className="App">
                <table>
                    <tr>
                        <th>STT</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Avatar</th>
                    </tr>
                        {listUsers && listUsers.length > 0 && 
                        listUsers.map((user, index) => {
                            return (
                                <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.email}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td><img src={user.avatar}/></td>
                                </tr>
                            )
                        })}
                </table>
            </div>
        )
    }
}

export default ListUser;