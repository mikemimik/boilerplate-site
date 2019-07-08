/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
import HomePage from '../HomePage';
// import FeaturePage from 'containers/FeaturePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import Header from 'components/Header';
// import Footer from 'components/Footer';
// import './style.scss';

export default class App extends PureComponent {
  render () {
    return (
      <div className='app-wrapper'>
        {/* <Header /> */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          {/* <Route path='/features' component={FeaturePage} /> */}
          {/* <Route path='' component={NotFoundPage} /> */}
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}
