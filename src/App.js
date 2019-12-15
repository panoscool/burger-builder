import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import Spinner from './components/UI/Spinner/Spinner';
import { authCheckState } from './store/actions';

const Checkout = lazy(() => import('./containers/Checkout/Checkout'));

const Orders = lazy(() => import('./containers/Orders/Orders'));

const Auth = lazy(() => import('./containers/Auth/Auth'));

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authCheckState());
  }, [dispatch])


  let routes = (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route path="/" component={BurgerBuilder} />
      <Redirect to="/" />
    </Switch>
  );

  if (token) {
    routes = (
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/logout" component={Logout} />
        <Route path="/auth" component={Auth} />
        <Route path="/" component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return <Layout><Suspense fallback={<Spinner />}>{routes}</Suspense></Layout>;
}

export default App;
