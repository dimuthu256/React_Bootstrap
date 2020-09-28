import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home  from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import NoMatch from './Components/NoMatch';
import Layout from  './Hoc/Layout/Layout';
import NavigationBar from './Common/NavigationBar'
import Header from './Common/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <React.Fragment>
          <Router>
            <NavigationBar />
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Layout>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={NoMatch} />
              </Layout>
            </Switch>
          </Router>
        </React.Fragment>
      </header>
    </div>
  );
}

export default App;
