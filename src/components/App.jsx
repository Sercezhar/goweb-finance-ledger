import { useRef } from 'react';
import Appbar from './Appbar/Appbar';
import Blog from './Blog';
import BusinessCases from './BusinessCases';
import Footer from './Footer';
import Hero from './Hero';
import Notification from './Notification';
import OurTeam from './OurTeam';
import RequestCallback from './RequestCallback';
import Solutions from './Solutions';

export const App = () => {
  const notificationRef = useRef();

  function notificate(title, message) {
    notificationRef.current.showNotification(title, message);
  }

  return (
    <div>
      <Notification ref={notificationRef} />
      <Appbar />
      <Hero />
      <Solutions />
      <BusinessCases />
      <Blog />
      <OurTeam />
      <RequestCallback notificate={notificate} />
      <Footer />
    </div>
  );
};
