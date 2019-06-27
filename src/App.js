import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Users from './pages/Users'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Users}/>
      </Switch>
    </Layout>
  </BrowserRouter>

)

export default App;
