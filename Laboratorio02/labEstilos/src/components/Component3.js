import React from 'react';
import styled from 'styled-components';

const Component3 = () => {
  return (
    <StyledWrapper>
      <div className="input-container">
        <input placeholder="Add Item" type="text" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* From Uiverse.io by Smit-Prajapati */
  .input-container {
    display: flex;
    background: white;
    border-radius: 1rem;
    background: linear-gradient(173deg, #23272f 0%, #14161a 100%);
    box-shadow:
      10px 10px 20px #0e1013,
      -10px -10px 40px #383e4b;
    padding: 0.3rem;
    gap: 0.3rem;
  }

  .input-container input {
    border-radius: 0.8rem;
    background: #23272f;
    box-shadow:
      inset 5px 5px 10px #0e1013,
      inset -5px -5px 10px #383e4b,
      0px 0px 100px rgba(255, 212, 59, 0),
      0px 0px 100px rgba(255, 102, 0, 0);
    width: 100%;
    flex-basis: 100%;
    padding: 1rem;
    border: none;
    border: 1px solid transparent;
    color: white;
    transition: all 0.2s ease-in-out;
  }

  .input-container input:focus {
    border: 1px solid #ffd43b;
    outline: none;
    box-shadow:
      inset 0px 0px 10px rgba(255, 102, 0, 0.5),
      inset 0px 0px 10px rgba(255, 212, 59, 0.5),
      0px 0px 100px rgba(255, 212, 59, 0.5),
      0px 0px 100px rgba(255, 102, 0, 0.5);
  }

  @media (max-width: 500px) {
    .input-container {
      flex-direction: column;
    }

    .input-container input {
      border-radius: 0.8rem;
    }
  }`;

export default Component3;
