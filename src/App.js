import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import MyNavBar from './components/MyNavBar/MyNavBar';
import Homepage from './components/Homepage/Homepage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTimesCircle, faArrowRight, faArrowLeft, faPlus, faGlobeEurope, faUtensils, faGlobe, faMicrophoneAlt, faVolumeUp, faNetworkWired, faCamera, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt, faLightbulb, faClock, faHandshake } from '@fortawesome/free-regular-svg-icons'
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, Transition } from 'react-transition-group';
import Events from './components/Events/Events';
import EventsSpace from './components/EventsSpace/EventsSpace';
import Footer from './components/Footer/Footer';
import Academies from './components/Academies/Academies';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SpaceBlog from './components/SpaceBlog/SpaceBlog';
import NoMatch from './components/NoMatch/NoMatch';
import { play, exit } from './timelines/timelines';

library.add(faArrowLeft, faHandshake, faClock, faUser, faTimesCircle, faArrowRight, faPlus, faCalendarAlt, faFacebook, faLinkedinIn, faInstagram, faGlobeEurope, faUtensils, faGlobe, faMicrophoneAlt, faVolumeUp, faLightbulb, faNetworkWired, faCamera)

function App() {

  return (
    <Container fluid className="App">
      <ScrollToTop />
      <MyNavBar />
      <Route render={({ location }) => {
        const { pathname } = location;
        return (
          <TransitionGroup component={null}>
            <Transition
              key={pathname ? pathname : 'gggg'}
              appear={true}
              onEnter={(node, appears) => play(pathname, node, appears)}
              onExit={(node, appears) => exit(node, appears)}
              timeout={{ enter: 1750, exit: 150 }}
            >
              <Switch>
                <Route path={['/http:', '/https:']} component={props => {
                  window.location.replace(props.location.pathname.substr(1))
                  return null
                }} />
                <Route exact path='/' component={Homepage} />
                <Route exact path='/events' component={Events} />
                <Route exact path='/academies' component={Academies} />
                <Route exact path='/events-space' component={EventsSpace} />
                <Route exact path='/space-blog' component={SpaceBlog} />
                <Route component={NoMatch} />
              </Switch>
            </Transition>
          </TransitionGroup>
        )
      }}
      />
      <Footer />
    </Container>
  );
}

export default withRouter(App);
