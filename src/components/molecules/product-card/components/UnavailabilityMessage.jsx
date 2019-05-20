import React from 'react';
import styled from '@emotion/styled';

export const UnavailabilityMessage = () => {
  const Message = styled.div`
    background-color: rgba(120, 120, 120, 0.3);
    box-shadow: 0px 0px 2px #2d2d2d;
    color: #e04a4a;
    display: flex;
    font: 400 1em system-ui;
    font-style: italic;
    height: 10%;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60%;
    opacity: 0;
    padding-top: 0.2em;
    text-align: center;
    text-shadow: 2px 0px 0px #2d2d2d;
    transition: 0.3s all;
    width: 50%;
  `;
  return (
    <Message className="c-product-card__unavailability-message">
      Currently&#10;Unavailable
    </Message>
  );
};
