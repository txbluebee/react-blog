import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component{

    componentDidMount(){
        if (!this.props.post){
            const { id } = this.props.match.params;
            this.props.fetchPost(id);
        }
    }


    onClickDeleteBtn(){
        const { id } = this.props.match.params;
        this.props.deletePost(id, ()=>{
            this.props.history.push('/');
        })
    }

    render() {
        const { post } = this.props;

        if (!post){
            return (
                <div>Loading...</div>
            );
        }
        return(
            <div>
                <div className="d-flex justify-content-between my-3">
                    <Link className="btn btn-outline-primary" to="/">Back Home</Link>
                    <button className="btn btn-outline-danger" onClick={this.onClickDeleteBtn.bind(this)}>Delete Post</button>
                </div>
                <h2>{post.title}</h2>
                <h6>Category: {post.categories}</h6>
                <h6>Content</h6>
                <hr/>
                <p>{post.content} </p>
            </div>    
        );
    }
}

function mapStateToProps({ posts }, ownProps){
    return {
        post: posts[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);