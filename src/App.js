import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import SignUp from './pages/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop';
import Products from './pages/Products/Products';
import ProductDetails from './pages/ProductDetails/ProductDetails';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" exact component={ProductDetails} />

        <Route path="/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
