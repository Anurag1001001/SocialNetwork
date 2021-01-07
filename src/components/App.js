// PACKAGE IMPORT
import React from 'react';
import {connect} from 'react-redux';

// FILE IMPORT
import {fetchPosts} from '../actions/posts';
import {PostsList} from './';

class App extends React.Component{
  componentDidMount(){
    // call fetchPosts() function to fetch posts from api
    this.props.dispatch(fetchPosts());
  }
  render(){
    const {posts} = this.props;
    return (
      <div>
        <PostsList posts= {posts} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(App);
