import React from 'react';
import styled from 'styled-components';

import BackgroundImg from '../../assets/pictures/health-worker.png'

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image: url(${BackgroundImg});  
`;

export function TopSection (props) {
  return <TopContainer></TopContainer>
}