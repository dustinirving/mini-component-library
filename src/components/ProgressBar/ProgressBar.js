/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': '8px',
    '--border-radius': '4px',
  },
  medium: {
    '--height': '12px',
    '--border-radius': '4px',
  },
  large: {
    '--height': '24px',
    '--border-radius': '8px',
    '--padding': '4px'
  },
};

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: var(--height);
  border-radius: var(--border-radius);
  width: 270px;
  padding: var(--padding);
  overflow: hidden;
`;

const Progress = styled.div`
  border-radius: 4px 0 0 4px;
  background: ${COLORS.primary};
  width: ${(props) => props.value + '%'};
  height: 100%;
`;

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <Wrapper
      role="progressbar"
      style={styles}
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <Progress value={value}></Progress>
    </Wrapper>
  );
};

export default ProgressBar;
