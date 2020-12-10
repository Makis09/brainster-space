import React from "react";
import "./App.css";
import "./assets/fontAwesome/fontAwesomeIcons";

import MyNavBar from "./components/MyNavBar/MyNavBar";
import Footer from "./components/Footer/Footer";

import Homepage from "./pages/Homepage/Homepage";
import Events from "./pages/Events/Events";
import EventsSpace from "./pages/EventsSpace/EventsSpace";
import Academies from "./pages/Academies/Academies";
import SpaceBlog from "./pages/SpaceBlog/SpaceBlog";
import NoMatch from "./pages/NoMatch/NoMatch";

import { Container } from "react-bootstrap";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import { play, exit } from "./timelines/timelines";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Container fluid className="App">
      <ScrollToTop />
      <MyNavBar />
      <Route
        render={({ location }) => {
          const { pathname } = location;
          return (
            <TransitionGroup component={null}>
              <Transition
                key={pathname ? pathname : "initial"}
                appear={true}
                onEnter={(node) => play(pathname, node)}
                onExit={(node) => exit(node)}
                timeout={{ enter: 1750, exit: 150 }}
              >
                <Switch>
                  <Route
                    path={["/http:", "/https:"]}
                    component={(props) => {
                      window.location.replace(
                        props.location.pathname.substr(1)
                      );
                      return null;
                    }}
                  />
                  <Route exact path="/" component={Homepage} />
                  <Route exact path="/events" component={Events} />
                  <Route exact path="/academies" component={Academies} />
                  <Route exact path="/events-space" component={EventsSpace} />
                  <Route exact path="/space-blog" component={SpaceBlog} />
                  <Route component={NoMatch} />
                </Switch>
              </Transition>
            </TransitionGroup>
          );
        }}
      />
      <Footer />
    </Container>
  );
}

export default withRouter(App);
