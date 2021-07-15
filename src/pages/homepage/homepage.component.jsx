import React from 'react';
import styled from 'styled-components';
import { TopSection } from './top-section';

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
;`

export default function HomePage(props) {
  return <PageContainer>
    <TopSection />
  </PageContainer>
}