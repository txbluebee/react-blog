import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { sendPost } from '../actions';
import { Link } from 'react-router-dom';
import requireAuth from './../hoc/require_auth';

import Header from './header';

class PostsNew extends Component{

    renderField(field){
        const { error, touched } = field.meta;
        const className = `form-control ${ touched && error?'is-invalid': ''}`
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input 
                    type={field.type}
                    name={field.name} 
                    className={className} 
                    {...field.input} /> 
                <div className="invalid-feedback">    
                    {touched? error: ""}
                </div>        
            </div>    
        );
    }

    renderTextarea(field){
        const { error, touched } = field.meta;
        const className=`form-control ${touched&&error?'is-invalid':''}`;
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <textarea 
                    className={className}
                    type={field.type}
                    name={field.name} 
                    rows="3"
                    {...field.input}
                    />
                <div className="invalid-feedback">   
                    { touched? error:""}
                </div>       
            </div>    
        );
    }

    onSubmit(values){
        this.props.sendPost(values, ()=>{
            this.props.history.push('/');
        })
    }

    render(){
        const { handleSubmit } = this.props;

        return(
            <div>
							<Header />
							<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label="Title"
                    name="title"
                    type="text"
                    component={this.renderField} />  
                <Field 
                    label="Categories"
                    name="categories"
                    type="text"
                    component={this.renderField} />  
                <Field 
                    label="Content"
                    name="content"
                    type="text"
                    component={this.renderTextarea} />
                <button type="submit" className="btn btn-success">Add</button> 
                <Link className="btn btn-info ml-3" to="/">Cancal</Link>          
            	</form>    
            </div>

        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.title){
        errors.title = "Please enter title";
    }
    if (!values.categories){
        errors.categories = "Please enter categories";
    }
    if (!values.content){
        errors.content = "Please enter content";
    }
    return errors;
}

export default reduxForm({
    form: 'PostsNewForm',
    validate
})(
		connect(null, { sendPost })
	(
		requireAuth(PostsNew))
);