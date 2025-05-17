import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background-color: #f6b800;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function YellowBox({ children }) {
  return <Box>{children}</Box>;
}

export default YellowBox;
