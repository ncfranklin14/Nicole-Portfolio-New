import Footer from './Footer';
import Header from './Header';
import About from './About/About';
import Work from './Work/Work';
import Resume from './Resume/Resume';


export default function PortfolioContainer() {


  return (
    <div className='portfolio'>
      <Header />
      <About />
      <Work />
      <Resume />
      <Footer />
    </div>
  );
}
