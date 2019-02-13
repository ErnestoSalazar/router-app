import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';

const App = () => (
  <BrowserRouter>{/* renderes router that listens to URL changes, and provides other react components information about the current URL and which components to render */}
    <div className="container">
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' render={() => <About title='About'/>} />
        <Route exact path='/teachers' component={Teachers} />
        <Route path='/teachers/:topic/:name' component={Featured} /> {/* Featured will rended when subpath is included in teachers URL*/}
        <Route path='/courses' component={Courses} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;