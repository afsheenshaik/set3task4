import React, { Component } from 'react'
import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./task4.css"
class Task4 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount(){
        axios.get('https://dummyjson.com/users')
        .then(response => {
            console.log(response.data.users);
            this.setState({
                posts:response.data.users
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
  render() {
    const { posts } = this.state
    return (
        <div className='bg-dark text-white text-start border rounded mb-4'>
            <div className="row mb-3 border-bottom fw-bold">
                <div className="col-1">Sno.</div>
                <div className="col-2">Profile Pic</div>
                <div className="col-3">First Name</div>
                <div className="col-4">Last Name</div>
                <div className="col-5">Gender</div>
                <div className="col-6">Email</div>
                <div className="col-7">Username</div>
                <div className="col-8">Domain</div>
                <div className="col-9">IP</div>
                <div className="col-10">University</div>
                </div>
                {
                    posts.length?posts.map(post=> 
                        <div className="row border-right-white border-left-white">
                        <div className="col-1 mr-1">{post.id}</div>
                        <div className="col-2 mr-1"><img src={post.image} alt="" width={30} height={30}/></div>
                        <div className="col-3 mr-1">{post.firstName}</div>
                        <div className="col-4 mr-1">{post.lastName}</div>
                        <div className="col-5 mr-1">{post.gender}</div>
                        <div className="col-6 mr-1">{post.email}</div>
                        <div className="col-7 mr-1">{post.username}</div>
                        <div className="col-8 mr-1">{post.domain}</div>
                        <div className="col-9 mr-2">{post.ip}</div>
                        <div className="col-10 mr-1 ">{post.university}</div>
                    </div>):null
                }
        </div>
    )
  }
}

export default Task4