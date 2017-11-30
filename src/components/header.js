import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import * as actions from './../actions/index';

class Header extends React.Component {

  toggleButton(){
    if (!this.props.authenticated){
      return <button onClick={()=>this.props.authenticate(true)} className="btn btn-outline-light">Sign In</button>
    }
    return <button onClick={()=>this.props.authenticate(false)} className="btn btn-outline-light">Sign Out</button>
  }
  render(){
    console.log(this.props.authenticated);
    return (
      <div>
        <div className="header bg-cover d-flex justify-content-center align-items-center text-white">
          <div className="h1">Blog Post</div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
              <Link className="nav-item nav-link" to="/posts/new">New Post</Link>
            </div>
          </div>
          <div>
            {this.toggleButton()}
          </div>
        </nav>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { authenticated: state.authenticated};
}

export default connect(mapStateToProps, actions)(Header);