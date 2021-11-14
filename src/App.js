import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
/* import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import NewsView from './views/NewsView';
import NotFoundView from './views/NotFoundView';
import ProfileView from './views/ProfileView'; */
/* import Spinner from './components/Loader/Loader'; */

const AppBar = lazy(() => import('./components/AppBar/AppBar'));
const Container = lazy(() => import('./components/Container/Container'));
const NewsView = lazy(() => import('./views/NewsView'));
const NotFoundView = lazy(() => import('./views/NotFoundView'));
const ProfileView = lazy(() => import('./views/ProfileView'));
/* const Spinner = lazy(() => import('./components/Loader/Loader')); */

export default function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Container>
        <AppBar />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <Route path="/" exact>
              <NewsView />
            </Route>

            <Route path="/profile/:uniqueId">
              <ProfileView />
            </Route>

            {/* <Route path="/profile>
          <ProfileView />
        </Route> */}

            <Route>
              <NotFoundView />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </Suspense>
  );
}
