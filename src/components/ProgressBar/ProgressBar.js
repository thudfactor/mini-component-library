/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.transparentGray15};
  height: var(--searchbar-height, ${12 / 16}rem);
  position: relative;
  box-shadow: 0px 2px 4px 0px #80808059 inset;
  border-radius: var(--corner-radius, ${4 / 16}rem);
  overflow: hidden;
`;

const ProgressFill = styled.div`
  --valuePercent: ${props => props.value}%;
  border-radius: ${4 / 16}rem;
  position: absolute;
  inset: var(--fill-inset, 0);
  background-image: linear-gradient(to right, ${COLORS.primary} 0%, ${COLORS.primary} var(--valuePercent), ${COLORS.primaryTransparent} var(--valuePercent), ${COLORS.primaryTransparent} 100%);
`;

const SmallProgressBar = styled(BaseProgressBar)`
  --searchbar-height: ${8 / 16}rem;
`;

const LargeProgressBar = styled(BaseProgressBar)`
  --searchbar-height: ${24 / 16}rem;
  --fill-inset: ${4 / 16}rem;
  --corner-radius: ${8 / 16}rem;
`;

function BaseProgressBar({ value, className }) {
  return (
    <Wrapper
      className={className}
      role="progressbar"
      aria-valuenow={value}
    >
      <ProgressFill value={value}>
        <VisuallyHidden>{value}%</VisuallyHidden>
      </ProgressFill>
    </Wrapper>
  );
}

const SIZES = ['small', 'medium', 'large'];

const ProgressBar = ({ value, size }) => {
  let parsedSize = size || 'medium';
  if (SIZES.includes(size) === false) {
    console.error(`Invalid progress bar size prop: ${size}`);
    parsedSize = 'medium';
  }

  let Component = BaseProgressBar;

  if (parsedSize === 'small') {
    Component = SmallProgressBar;
  } else if (parsedSize === 'large') {
    Component = LargeProgressBar;
  }

  return <Component value={value} />;
};

export default ProgressBar;
