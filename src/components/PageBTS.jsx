
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Navbar';
import ScrollProgress from '../components/ScrollProgress';
import BTS from '../components/BTS';
import Projet2 from '../components/projets/Projets2';
import VeilleTechno from './VeilleTechno';
import Articles from './ArticlesVeille';
import E4 from '../components/E4';
import E5 from '../components/E5';
import Footer from '../components/Footer';

function PageBTS() {
  return (
    <div>
      <Menu />
      <ScrollProgress />
      <BTS />
      <Projet2 />
      <VeilleTechno />
      <Articles />
      <E4 />
      <E5 />
      <Footer />
    </div>
  );
}

export default PageBTS;
