import logo from './logo.svg';
import './App.css';
import SubMenu from './components/SubMenu';
import MainMenu from './components/MainMenu';
import PosterComponent from './components/PosterComponent';
import HeaderComponent from './components/HeaderComponent';
import TilesComponent from './components/TilesComponent';
import SliderParentComponent from './components/SliderParentComponent';

function App() {
  return (
    <>
      <SubMenu />
      <MainMenu />
      <PosterComponent />
      <HeaderComponent title="Наші літаки" identifier="planes-header"/>
      <TilesComponent />
      <HeaderComponent title="Галерея" identifier="gallery-header"/>
      <SliderParentComponent />
      <HeaderComponent title="Відгуки клієнтів" identifier="feedback-header"/>
    </>
  );
}

export default App;
