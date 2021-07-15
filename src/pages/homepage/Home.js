import React from 'react';
import HeroSection from '../../components/header/HeroSection';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data';

const Home = () => {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
    </>
  );
}
export default Home;