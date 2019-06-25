import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from './components/Layout'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={() => <p>Home</p>}/>
      </Switch>
    </Layout>
  </BrowserRouter>

)

export default App;
