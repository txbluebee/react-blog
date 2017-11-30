import React from 'react';
import { connect } from 'react-redux';


export default function(ComposedComponent) {
  class Authentication extends React.Component {

    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = ({ authenticated }) => {
    return { authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
