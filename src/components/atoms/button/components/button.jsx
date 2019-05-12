import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

export const Button = ({
  onClick,
  href,
  condition,
  text,
  target = 'button',
  ...otherProps
}) => {
  if ((onClick && href) || (!onClick && !href)) return null;
  const disabled = condition === 'disabled';
  const getLinkAddress = () => (!disabled ? href : null);

  const StyledLink = styled(props => <Link {...props} />)`
    display: inline-block;
    color: blue;
    border: 2px solid #000;
    text-align: center;
    text-align: center;
    padding: 5px;
    text-decoration: none;
    background-color: red;
    box-shadow: 10px 5px 5px #999999;
  `;

  const Button = styled.button`
    display: inline-block;
    color: blue;
    border: 2px solid #000;
    text-align: center;
    text-align: center;
    padding: 5px;
    text-decoration: none;
    background-color: red;
    box-shadow: 40px;
    box-shadow: 10px 5px 5px #999999;
  `;
  return href ? (
    <StyledLink to={href}>{text}</StyledLink>
  ) : (
    <Button onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
};
