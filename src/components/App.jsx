import Appbar from './Appbar/Appbar';
import Blog from './Blog';
import BusinessCases from './BusinessCases';
import Footer from './Footer';
import Hero from './Hero';
import OurTeam from './OurTeam';
import RequestCallback from './RequestCallback';
import Solutions from './Solutions';

export const App = () => {
  return (
    <div>
      <Appbar />
      <Hero />
      <Solutions />
      <BusinessCases />
      <Blog />
      <OurTeam />
      <RequestCallback />
      <Footer />
    </div>
  );
};
