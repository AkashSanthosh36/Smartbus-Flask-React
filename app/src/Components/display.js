import React, { Component } from 'react';
import axios from 'axios'

class display extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:[]
        }
    }
    
    componentDidMount(){
        axios.get('http://127.0.0.1:5000')
        .then( response => {
            this.setState({
                posts:response.data
            })
        })
        .catch( error => {
            console.log(error)
        })
    }

    render() {
        const {posts} = this.state
        return (
            <div>
                Posts
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>{post.username}</div>):
                    null
                }
            </div>
        );
    }
}

export default display;