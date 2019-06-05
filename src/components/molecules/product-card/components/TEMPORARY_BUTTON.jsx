import React from 'react';
import styled from '@emotion/styled';

//TODO: REMOVE THIS FILE WHEN BUTTON ATOM IS COMPLETED
export const TEMPORARY_BUTTON = ({ children, disabled, faux }) => {
  const gradientColours = disabled ? '#aa4931, #d85e6a' : '#3b5f91, #51828c';
  const show = `@media screen and (max-width: 1024px) {
      margin-top: 60%;
      opacity: 1;
    }`;
  const StyledButton = styled.button`
    background-image: linear-gradient(to right, ${gradientColours});
    box-shadow: 0 0 5px #2d2d2d;
    color: #ededed;
    display: flex;
    flex-direction: column;
    font: 400 ${disabled ? '1' : '1.6'}em arial;
    font-style: italic;
    height: 16%;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 80%;
    opacity: 0;
    position: relative;
    text-align: center;
    text-shadow: 2px 0 0 #2d2d2d;
    width: 75%;
    z-index: 2;

    ${disabled && show}
  `;

  const props = {
    className: 'button',
    as: faux && 'div',
    'data-testid': 'button-atom'
  };

  return <StyledButton {...props}>{children}</StyledButton>;
};
