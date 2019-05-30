import React from 'react';
import styled from '@emotion/styled';

export const UnavailabilityMessage = () => {
  const Message = styled.div`
    background-image: linear-gradient(to right, #aa4931, #d1583a);
    box-shadow: 0 0 5px #2d2d2d;
    color: #ededed;
    display: flex;
    font: 400 1em arial;
    font-style: italic;
    height: 10%;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60%;
    padding-top: 0.2em;
    text-align: center;
    text-shadow: 1px 0 0 #2d2d2d;
    transition: 0.3s all;
    width: 50%;

    @media screen and (min-width: 1024px) {
      opacity: 0;
    }
  `;

  return (
    <Message className="c-product-card__unavailability-message">
      Currently&#10;Unavailable
    </Message>
  );
};
