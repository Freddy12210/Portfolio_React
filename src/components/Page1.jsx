
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../components/Navbar';
import MainPage from '../components/MainPage';
import ScrollProgress from '../components/ScrollProgress';
import Presentation from '../components/Presentation';
import Projets from '../components/projets/Projets';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Page1() {
  return (
    <div>
      <Menu />
      <ScrollProgress />
      <MainPage />
      <Presentation />
      <Projets />
      <Contact />
      <Footer />
    </div>
  );
}

export default Page1;
