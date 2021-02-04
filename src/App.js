import React, { useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactGa from "react-ga";
import Navbar from "./components/navbar";

const Home = lazy(() => import("./components/home"));
const WHOGuidelinesPage = lazy(() => import("./components/WHOGuidelinesPage"));
const NewsPage = lazy(() => import("./components/NewsPage"));
const NotFound = lazy(() => import("./components/notFound"));
const Test = lazy(() => import("./components/test"));

const schemaMarkup = {
  "@context": "http://schema.org/",
  "@type": "NGO",
  name:
    "Track the spread of Coronavirus (COVID-19) in India from state level to district level and around the world",
  alternateName: "COVID TRACKER",
  url: "https://covid-tracker.com/",
};

function App() {
  const history = require("history").createBrowserHistory;

  useEffect(() => {
    ReactGa.initialize("UA-163288419-1");
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      <Router history={history}>
        <Navbar />
        <Suspense fallback={<div className="lazy"></div>}>
          <main className="container">
            <Switch>
              <Route path="/global" component={Test} />
              <Route path="/NewsPage" component={NewsPage} />
              <Route path="/not-found" component={NotFound} />
              <Route path="/WHOGuidelinesPage" component={WHOGuidelinesPage} />
              <Route exact path="/" component={Home} />
              <Redirect to="/not-found" />
            </Switch>
          </main>
        </Suspense>
      </Router>
    </React.Fragment>
  );
}

export default App;
