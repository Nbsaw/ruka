import React, { Component } from 'react';
import './css/App.css';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import qs from 'qs';
import { withRouter } from 'react-router';
import { githubApi } from 'api';

// using webpack import syntax up performance
import AsyncComponent from 'hoc/AsyncComponent';

// Basic Component
import Aside from 'blocks/Aside';
import Container from 'blocks/Container';

const Layout = styled.div`
  display: flex;
  transition: 300ms ease-in-out;
  transform: ${props =>
    props.showAside ? 'translateX(260px)' : 'translateX(0px)'};
`;

const ToggleAside = styled.div`
  position: fixed;
  top: 30px;
  left: 13px;
  border: 1px solid red;
  padding: 10px;
  display: none;
  @media (max-width: 590px) {
    display: block;
  }
`;

// Page Layout
class DefaultLayoutRouter extends Component {
  constructor(props) {
    super(props);
    this.toggleAside = this.toggleAside.bind(this);
  }
  state = {
    showAside: false,
  };
  toggleAside() {
    const { showAside } = this.state;
    this.setState({ showAside: !showAside });
  }
  render() {
    const { showAside } = this.state;
    const { component: Component, ...rest } = this.props;

    return (
      <Route
        exact
        {...rest}
        render={matchProps => (
          <Layout showAside={showAside}>
            <Aside />
            <Container>
              {/* <ToggleAside onClick={this.toggleAside}>
                点老子{ showAside ? '隐藏' : '显示' }侧栏
              </ToggleAside> */}
              <Component {...matchProps} />
            </Container>
          </Layout>
        )}
      />
    );
  }
}

const HomePage = AsyncComponent(() => import('page/HomePage'));
const AboutPage = AsyncComponent(() => import('page/AboutPage'));
const ArchivesPage = AsyncComponent(() => import('page/ArchivesPage'));
const ClosedPage = AsyncComponent(() => import('page/ClosedPage'));
const PostPage = AsyncComponent(() => import('page/PostPage'));
const PostsPage = AsyncComponent(() => import('page/PostsPage'));
const TimeLinePage = AsyncComponent(() => import('page/TimelinePage'));
const WorksPage = AsyncComponent(() => import('page/WorksPage'));
const NotFoundPage = AsyncComponent(() => import('page/NotFoundPage'));
const CommentPage = AsyncComponent(() => import('page/CommentPage'));

class App extends Component {
  async componentDidMount() {
    const redirect_uri = localStorage.getItem('redirect_uri');
    let { code } = qs.parse(window.location.search.substr(1));
    if (code) {
      localStorage.removeItem('redirect_uri');
      code = code.replace('code=', '');
      localStorage.setItem(
        'accessToken',
        await githubApi.user.getAccessToken(code)
      );
    }
    redirect_uri && this.props.history.replace(redirect_uri);
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/about" component={AboutPage}  /> */}
        {/* <Route exact path="/archives" component={ArchivesPage}  /> */}
        {/* <Route exact path="/closed" component={ClosedPage}  /> */}
        <DefaultLayoutRouter exact path="/posts" component={PostsPage} />
        <DefaultLayoutRouter exact path="/post/:number" component={PostPage} />
        <DefaultLayoutRouter exact path="/timeline" component={TimeLinePage} />
        <DefaultLayoutRouter exact path="/works" component={WorksPage} />
        <DefaultLayoutRouter exact path="/comment" component={CommentPage} />
        <DefaultLayoutRouter component={NotFoundPage} />
      </Switch>
    );
  }
}

export default withRouter(App);
