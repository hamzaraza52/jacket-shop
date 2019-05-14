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

  const defaultColours = {
    textColour: '#751A14',
    borderColour: '#083F75',
    backgroundColour: '#2171C2',
    shadowColour: '#3D420B'
  };

  const { colours = defaultColours, fontSize, fontFamily } = otherProps;

  const buttonStyles = `
  display: inline-block;
  color: ${colours.textColour};
  border: 1px solid ${colours.borderColour};
  text-align: center;
  font-size: ${fontSize || '12px'};
  font-family: ${fontFamily || 'helvetica'} sans-serif;
  padding: 5px;
  text-decoration: none;
  background-color: ${colours.backgroundColour};
  box-shadow: 2px 1px 1px ${colours.shadowColour};
  cursor: default;
  box-sizing: border-box;
`;

  let linkRef;

  if (!disabled) linkRef = href;

  const StyledLink = styled(props => <Link {...props} />)(buttonStyles);

  const Button = styled.button(buttonStyles);
  return href ? (
    <StyledLink to={linkRef}>{text}</StyledLink>
  ) : (
    <Button onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
};
