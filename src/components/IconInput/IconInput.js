import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: 16,
  large: 24,
};

const Wrapper = styled.label`
  position: relative;
  display: block;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const TextInput = styled.input`
  width: var(--width);
  border: none;
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

const SmallInput = styled(TextInput)`
  height: 24px;
  font-size: ${14 / 16}rem;
  border-bottom: 1px solid ${COLORS.black};
  padding-left: 24px;
`;

const LargeInput = styled(TextInput)`
  height: 36px;
  font-size: ${18 / 16}rem;
  border-bottom: 2px solid ${COLORS.black};
  padding-left: 36px;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 2px;
  left: 0;
  pointer-events: none;
  color: inherit;
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const sizeNumber = SIZES[size];
  const Input = size === 'small'
    ? SmallInput
    : LargeInput;

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input placeholder={placeholder} />
      <IconWrapper>
        <Icon id={icon} size={sizeNumber} width={width} />
      </IconWrapper>
    </Wrapper>
  );
};

export default IconInput;
