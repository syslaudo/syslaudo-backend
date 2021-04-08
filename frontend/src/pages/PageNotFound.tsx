import {ReactComponent as NotFoundSvg} from '../assets/undraw_not_found_60pq.svg';
import Body from '../components/Body';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function PageNotFound() {
  return (
    <div className="PageNotFound">
      <Navbar />
      <Body>
        <div className="centeredContainer">
          <NotFoundSvg className="svgImg" />
        </div>
        <br />
        <br />
        <br />
        <p className="centeredText boldText bigText">
          Erro 404 - Página não encontrada
        </p>
      </Body>
      <Footer />
    </div>
  );
}
