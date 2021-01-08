// PACKAGE IMPORT
import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

// FILE IMPORT
import {fetchPosts} from '../actions/posts';
import {PostsList, Navbar} from './';


// dummy component to understand Routing

const Login = () =><div>login</div>
const SignUp = () => <div>SignUp</div>
const Home = () => <div>Home</div>



class App extends React.Component{
  componentDidMount(){
    // call fetchPosts() function to fetch posts from api
    this.props.dispatch(fetchPosts());
  }
  render(){
    const {posts} = this.props;
    return (
      // it's my root component so i should tell Router by wrapping all the stuffs of root component, now Router has to work inside it. 
      <Router>
        <div>
          <Navbar />
          {/* <PostsList posts= {posts} /> */}
          

          {/* when i click on the given link react router route me to the given path which i mentioned in the <Route> tag */}
          <ul>
            <li>
              <Link to = 'Login'>login</Link>
            </li>
            <li>
              <Link to = 'SignUp'>SignUp</Link>
            </li>
            <li>
              <Link to = '/'>Home</Link>
            </li>
          </ul>
          {/* The benefit of using <Link> that react-router-dom provide is it doesn't reload the page whereas <a href=''> tag reload the page  */}

          {/* Let say i want Navbar to be common in our application then what i would write <Navbar/> outside Route, to specify a path for routing like below */}
          <Route exact path ='/' component = {Home}  />
          <Route exact path ='/Login' component = {Login}  />
          <Route exact path ='/SignUp' component = {SignUp}  />


        </div>
      </Router>
    );
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
}


export default connect(mapStateToProps)(App);
