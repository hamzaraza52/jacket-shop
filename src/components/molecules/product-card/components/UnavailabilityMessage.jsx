import React from 'react';
import styled from '@emotion/styled';

export const UnavailabilityMessage = () => {
  const Message = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 60%;
    display: none;
    width: 50%;
    height: 10%;
    font: 400 1em system-ui;
    font-style: italic;
    text-shadow: 2px 0px 0px #2d2d2d;
    text-align: center;
    background-color: rgba(120, 120, 120, 0.3);
    box-shadow: 0px 0px 2px #2d2d2d;
    padding-top: 0.2em;
    justify-content: center;
    color: #e04a4a;
  `;
  return (
    <Message className="c-product-card__unavailability-message">
      Currently&#10;Unavailable
    </Message>
  );
};
