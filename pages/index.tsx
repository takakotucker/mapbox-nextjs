import React, { useEffect } from 'react';
import '../theme/global.scss';
import HeaderBar from '../components/HomePage/HeaderBar/HeaderBar';
import MapTest from '../components/HomePage/Map/MapTest';

const HomePage: React.FunctionComponent = () => {
  useEffect(() => {
    import('webfontloader').then((WebFont) => WebFont.load({
      google: {
        families: ['Montserrat'],
      },
    }));
  }, []);
  return (
    <>
      <header>
        <HeaderBar />
      </header>
      <main>
        <MapTest />
      </main>
    </>
  );
};

export default HomePage;
