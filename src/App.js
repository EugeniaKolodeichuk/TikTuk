import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
/* import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import NewsView from './views/NewsView';
import NotFoundView from './views/NotFoundView';
import ProfileView from './views/ProfileView'; */
/* import Spinner from './components/Loader/Loader'; */

const AppBar = lazy(() =>
  import('./components/AppBar/AppBar' /*webpackChunkName: "app-bar"*/),
);
const Container = lazy(() =>
  import('./components/Container/Container' /*webpackChunkName: "container"*/),
);
const NewsView = lazy(() =>
  import('./views/NewsView/NewsView' /*webpackChunkName: "news-view"*/),
);
const NotFoundView = lazy(() =>
  import(
    './views/NotFoundView/NotFoundView' /*webpackChunkName: "not-found-page"*/
  ),
);
const ProfileView = lazy(() =>
  import(
    './views/ProfileView/ProfileView' /*webpackChunkName: "profile-view"*/
  ),
);

export default function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Container>
        <AppBar />

        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <Route path="/profile" exact>
              <NotFoundView />
            </Route>

            <Route path="/profile/:uniqueId" exact>
              <ProfileView />
            </Route>

            <Route path="/">
              <NewsView />
            </Route>
            <Route>
              <NotFoundView />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </Suspense>
  );
}
