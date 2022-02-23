import React from 'react';
import { Router, Location, Redirect } from '@reach/router';
import ScrollToTopBtn from './menu/ScrollToTop';
import Header from './menu/header';
// import Home from './pages/home';
// import Home1 from './pages/home1';
import Home2 from './pages/home2';
// import Explore from './pages/explore';
// import Explore2 from './pages/explore2';
// import Helpcenter from './pages/helpcenter';
// import Rangking from './pages/rangking';
import Colection from './pages/colection';
import ItemDetail from './pages/ItemDetail';
import AuctionDetail from './pages/AcceptBid';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
// import Author from './pages/Author';
// import Wallet from './pages/wallet';
// import Login from './pages/login';
// import LoginTwo from './pages/loginTwo';
// import Register from './pages/register';
// import Price from './pages/price';
// import Works from './pages/works';
// import News from './pages/news';
// import Create from './pages/create';
// import Auction from './pages/Auction';
// import Activity from './pages/activity';
// import Contact from './pages/contact';
// import ElegantIcons from './pages/elegantIcons';
// import EtlineIcons from './pages/etlineIcons';
// import FontAwesomeIcons from './pages/fontAwesomeIcons';
// import Accordion from './pages/accordion';
// import Alerts from './pages/alerts';
// import Progressbar from './pages/progressbar';
// import Tabs from './pages/tabs';

import { createGlobalStyle } from 'styled-components';
import Web3ModalProvider from 'contexts/Web3ModalProvider';
import Web3WrapperProvider from 'contexts/Web3WrapperProvider';

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }): any => {
  React.useEffect(() => window.scrollTo(0, 0), [location])
  return children
}

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id='routerhang'>
        <div key={location.key}>
          <Router location={location}>
            {children}
          </Router>
        </div>
      </div>
    )}
  </Location>
);

const app = () => (
  <Web3ModalProvider>
    <NotificationContainer />
    <Web3WrapperProvider>

      <div className="wraper">
        <GlobalStyles />
        <Header />
        <PosedRouter>
          <ScrollTop path="/">
            <Home2 exact path="/">
              <Redirect to="/home2" />
            </Home2>
            <Colection path="/collection" />
            <ItemDetail path="/ItemDetail" />
            <AuctionDetail path="/AuctionDetail" />
          </ScrollTop>
        </PosedRouter>
        <ScrollToTopBtn />
      </div>
      
    </Web3WrapperProvider>
    
    
  </Web3ModalProvider>
);
export default app; 