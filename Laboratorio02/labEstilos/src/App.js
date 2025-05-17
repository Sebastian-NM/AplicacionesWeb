import React from 'react';
import styled from 'styled-components';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import YellowBox from './components/Yellowbox';
import Wrapper from './components/Wrapper';
import InnerWrapper from './components/InnerWrapper';


function App() {
  return (
    <Wrapper>
      <InnerWrapper>
        <YellowBox>
          <Component1 />
        </YellowBox>
        <YellowBox>
          <Component2 />
        </YellowBox>
        <YellowBox>
          <Component3 />
        </YellowBox>
      </InnerWrapper>
    </Wrapper>
  );
}

export default App;
