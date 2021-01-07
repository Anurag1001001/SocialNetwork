// PACKAGE IMPORT
import React from 'react';
import {connect} from 'react-redux';

// FILE IMPORT
import {fetchPosts} from '../actions/posts';

class App extends React.Component{
  componentDidMount(){
    // call fetchPosts() function to fetch posts from api
    this.props.dispatch(fetchPosts());
  }
  render(){
    console.log('PROPS(coming from App.js)', this.props);
    return <div>App</div>;
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(App);
