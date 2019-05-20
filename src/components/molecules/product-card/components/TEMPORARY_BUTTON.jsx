import React from 'react';
import styled from '@emotion/styled';

//TODO: REMOVE THIS FILE WHEN BUTTON ATOM IS COMPLETED
export const TEMPORARY_BUTTON = ({ children, onClick }) => {
  const StyledButton = styled.button`
    background-image: linear-gradient(to right, #3b5f91, #51828c);
    box-shadow: 0px 0px 2px #2d2d2d;
    display: flex;
    color: #cccccc;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60%;
    opacity: 0;
    width: 75%;
    height: 16%;
    font: 400 1.6em system-ui;
    font-style: italic;
    text-shadow: 2px 0px 0px #2d2d2d;
    justify-content: center;
    border-style: none;
    transition: 0.3s all;

    :hover {
      cursor: pointer;
    }
  `;
  return (
    <StyledButton
      onCLick={onClick}
      className="c-button"
      data-testid="button-atom"
    >
      {children}
    </StyledButton>
  );
};
