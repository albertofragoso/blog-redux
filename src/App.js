import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Users from './pages/Users'
import Posts from './pages/Posts'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/:userId/posts" component={Posts} />
      </Switch>
    </Layout>
  </BrowserRouter>

)

export default App;
