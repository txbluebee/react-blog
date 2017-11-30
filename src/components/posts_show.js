import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

import Header from './header';

class PostsShow extends Component {

	componentDidMount() {
		if (!this.props.post) {
			const { id } = this.props.match.params;
			this.props.fetchPost(id);
		}
	}


	onClickDeleteBtn() {
		const { id } = this.props.match.params;
		this.props.deletePost(id, () => {
			this.props.history.push('/');
		})
	}

	showDeleteBtn(){
		if (this.props.authenticated){
			return <button className="btn btn-outline-danger" onClick={this.onClickDeleteBtn.bind(this)}>Delete Post</button>
		}
	}

	render() {
		const { post } = this.props;

		if (!post) {
			return (
				<div>Loading...</div>
			);
		}
		return (
			<div>
				<Header />
				<div className="d-flex justify-content-between my-3">
					<Link className="btn btn-outline-primary" to="/">Back Home</Link>
					{this.showDeleteBtn()}
				</div>
				<h2>{post.title}</h2>
				<h6>Category: {post.categories}</h6>
				<h6>Content</h6>
				<hr />
				<p>{post.content} </p>
			</div>
		);
	}
}

function mapStateToProps({ posts, authenticated }, ownProps) {
	return {
		post: posts[ownProps.match.params.id],
		authenticated
	}
}

export default connect(mapStateToProps, actions)(PostsShow);