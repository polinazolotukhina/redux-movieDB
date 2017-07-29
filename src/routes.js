import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import Popular from './containers/Popular/Popular';
import Drama from './containers/Drama/Drama';
import Kids from './containers/Kids/Kids';
import Cinema from './containers/Cinema/Cinema';
import Search from './containers/Search/Search';
import Favourites from './containers/Favourites/Favourites';
import NotFoundPage from './components/NotFoundPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="popular" component={Popular}/>
        <Route path="drama" component={Drama}/>
        <Route path="in_cinema_now" component={Cinema}/>
        <Route path="kids" component={Kids}/>
        <Route path="search" component={Search}/>
        <Route path="favourites" component={Favourites}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);
