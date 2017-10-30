import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPosts } from './../actions';

class PostsIndex extends Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        return _.map(this.props.posts, post=>{
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            );
        });
    }

    render() { 
        
        return (
            <div>
                <div className="d-flex justify-content-end my-3">
                    <Link className="btn btn-outline-dark" to='/posts/new'>Add New Post</Link>
                </div>    
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>    
            </div>
        );
    }
}

function mapStateToProps(state){
    return { posts: state.posts };
}


export default connect(mapStateToProps, { fetchPosts })(PostsIndex);