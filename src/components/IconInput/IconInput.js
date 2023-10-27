import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.label`
  position: relative;
  display: flex;
  gap: var(--gap);
  align-items: center;
  border: 1px solid currentColor;
  border-width: 0 0 var(--stroke-width) 0;
  width: var(--width, auto);
  color: ${COLORS.gray500};

  // This is not really supported by Firefox yet, but soon. I'm inclined
  // to leave this subtle difference in place until Mozilla gets its act
  // together.
  &:has(:placeholder-shown) {
    color: ${COLORS.gray500};
  }

  &:focus-within {
    outline: 1px dotted ${COLORS.black};
    outline: 2px solid -webkit-focus-ring-color;
    outline-offset: 2px;
    border-radius: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`

const NativeInput = styled.input`
  appearance: none;
  border-width: 0;
  align-self: end;
  font-size: var(--text-size);
  font-family: 'Roboto', sans-serif;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${COLORS.gray500};
  }

  ${Wrapper} & {
    flex: 1 1 100%;
  }
`;

const SIZES = {
  small: {
    '--size': "1rem",
    '--gap': ".5rem",
    '--text-size': "0.875rem",
    '--stroke-width': '1px'
  },
  large: {
    '--size': "1.5rem",
    '--gap': ".75rem",
    '--text-size': "1.125rem",
    '--stroke-width': '2px'
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated
}) => {
  const styles = SIZES[size];

  if (width) {
    styles['--width'] = width + 'px';
  }

  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }

  const strokeNumeric = parseInt(styles['--stroke-width'], 10);

  return (
    <Wrapper style={styles}>
      <Icon id={icon} strokeWidth={strokeNumeric} size={(size==='small') ? 16 : 24} />
      <VisuallyHidden>{label}</VisuallyHidden>
      <NativeInput {...delegated} type="text" placeholder={placeholder} />
    </Wrapper>
  );
};

export default IconInput;
