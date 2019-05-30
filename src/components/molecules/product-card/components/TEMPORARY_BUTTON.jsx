import React from 'react';
import styled from '@emotion/styled';

//TODO: REMOVE THIS FILE WHEN BUTTON ATOM IS COMPLETED
export const TEMPORARY_BUTTON = ({ children, onClick, faux }) => {
  const StyledButton = styled.button`
    background-image: linear-gradient(to right, #3b5f91, #51828c);
    border-style: none;
    box-shadow: 0 0 5px #2d2d2d;
    color: #ededed;
    display: flex;
    flex-direction: column;
    font: 400 1.6em arial;
    font-style: italic;
    height: 16%;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60%;
    opacity: 0;
    text-align: center;
    text-shadow: 2px 0 0 #2d2d2d;
    transition: 0.3s all;
    width: 75%;

    :hover {
      cursor: pointer;
    }
  `;

  return (
    <StyledButton
      as={faux && 'div'}
      className="c-button"
      data-testid="button-atom"
    >
      {children}
    </StyledButton>
  );
};
