// PACKAGE IMPORT
import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

// FILE IMPORT
import { fetchPosts } from "../actions/posts";
import { Home, Navbar, Page404 } from "./";

// dummy component to understand Routing

const Login = () => <div>login</div>;
const SignUp = () => <div>SignUp</div>;

class App extends React.Component {
  componentDidMount() {
    // call fetchPosts() function to fetch posts from api
    this.props.dispatch(fetchPosts());
  }
  render() {
    const { posts } = this.props;
    return (
      // it's my root component so i should tell Router by wrapping all the stuffs of root component, now Router has to work inside it.
      <Router>
        <div>
          <Navbar />

          {/* The benefit of using <Link> that react-router-dom provide is it doesn't reload the page whereas <a href=''> tag reload the page.
          So the next thing is that whenever we render our component via <Route /> component then <Route component pass the props by default, you can just console.log and look at those props.
          One more thing i want to tell is that <Route /> component will not accept any props apart from the default ones, so there is an alternative react-router-dom provide is to use render prop instead of component prop (any thing i've used inside<Route /> is the props ) in <Route /> like this ---> <Route path='/' render ={() => {Home}}, render prop will get a callback and we can easily pass props there>.
          
          */}
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                // Rembember i talked about default props that <Route /> give to us, so by using render (props/function don't know exactly what it is.) those default props are not passed to <Home /> component bu we can pass those default props to the callback and to the <Home /> component.
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route path="/Login" component={Login} />
            <Route path="/SignUp" component={SignUp} />
            <Route component={Page404} />
            {/* So ideally how <Route /> component works is : it ideally matches the path mentioned line by line and if it's matches then it route towards those component, and if more paths matches then it render component accordingly, so what i want to create here is if user entered worng URL then i want to display Page404.js component, one more thing i want my <Route /> component go to only one route whatever matches first, so in that case i'm gonna use switch component that i get from react-router-dom.
          
          */}
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
