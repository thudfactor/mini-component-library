import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  display: flex;
  align-items: center;
  gap: ${24/16}rem;
  background-color: ${COLORS.transparentGray15};
  padding: ${12/16}rem ${16/16}rem;
  border-radius: 8px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: 2px solid ${COLORS.primary};
  }
`;

const RealSelect = styled.select`
  position: absolute;
  inset: 0;
  border: none;
  opacity: 0;
  appearance: none;
`;

const Select = ({ label, value, onChange, children, ...delegated }) => {
  const id = "SelectID";
  console.log(id);
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      {displayedValue} <Icon id="chevron-down" strokeWidth={1} size={24} />
      <RealSelect {...delegated} value={value} onChange={onChange}>
        {children}
      </RealSelect>
    </Wrapper>
  );
};

export default Select;
