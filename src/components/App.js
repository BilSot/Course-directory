import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Featured from './Featured';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';

const App = () => (
      <div className="container">
          <Header />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" render={ () => <About /> } />
              <Route exact path="/teachers" component={Teachers} />
              <Route path="/teachers/:topic/:name?" component={Featured} />
              <Route path="/courses" component={Courses} />
              <Route component={NotFound} />
          </Switch>
      </div>
);

export default App;
