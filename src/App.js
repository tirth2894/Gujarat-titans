import Gallery from './components/gallery';
import Info from './components/info';
import Navbar from './components/navbar'
import News from './components/news';
import Players from './components/players';
import Schedule from './components/schedule';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Standings from './components/standings';
import Sponsor from './components/sponsor';
import UpArrow from './components/upArrow';

function App() {
  return (
    <>
    <div className='bg-[#142740] text-white font-[Nirmala UI] scroll-smooth	'>

      <Navbar />
      <Info/>
      <Schedule/>
      <Players/>
      <Standings/>
      <News/>
      <Gallery />
      <Sponsor/>
      <UpArrow/>
    </div>
    </>
  );
}

export default App;
