import React from 'react';
import styled from '@emotion/styled';

//TODO: REMOVE THIS FILE WHEN BUTTON ATOM IS COMPLETED
export const TEMPORARY_BUTTON = ({ children, disabled, faux }) => {
  const StyledButton = styled.button`
    background-image: linear-gradient(to right, #3b5f91, #51828c);
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
    opacity: 0;
    text-align: center;
    text-shadow: 2px 0 0 #2d2d2d;
    width: 75%;
  `;

  const DisabledButton = styled(StyledButton)`
    background-image: linear-gradient(to right, #aa4931, #d85e6a);
    font-size: 1em;

    @media screen and (max-width: 1024px) {
      margin-top: 60%;
      opacity: 1;
    }
  `;

  const props = {
    className: 'button',
    as: faux && 'div',
    'data-testid': 'button-atom'
  };

  return disabled ? (
    <DisabledButton {...props}>{children}</DisabledButton>
  ) : (
    <StyledButton {...props}>{children}</StyledButton>
  );
};
