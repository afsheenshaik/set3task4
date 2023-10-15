import React, { Component } from 'react';
import axios from 'axios'

class Data extends Component {
    constructor(props) {
      super(props)
      this.state={
        users:[]
      }
    }
    componentDidMount() {
      axios.get("https://dummyjson.com/users")
      .then(response=>{
        console.log(response)
        this.setState({users:response.data})
      })
      .catch(error=>{
        console.log(error)
      })
    }
    render() {
      const {users}=this.state
      return(
      <div>
        <table>
        <thead>
        <tr>
          <th>Sno</th>
          <th>Profile Pic</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>E-mail</th>
          <th>Username</th>
          <th>Domain</th>
          <th>IP</th>
          <th>University</th>
        </tr>
        </thead>
        <tbody></tbody>
        {
          users.length ?
          users.map(user=>
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.image}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ):
          null
        }      
        </table>  
      </div>
     )
  }
}

export default Data