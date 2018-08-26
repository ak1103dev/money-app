import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Background = styled.img`
  background-image: ${({ src }) => `url(${src})`};
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  border-radius: ${({ circle }) => (circle ? '50%' : 0)};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 5px;
`;

function Image(props) {
  return <Background {...props} />;
}

Image.defaultProps = {
  circle: false,
  width: 20,
  height: 20,
};
Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  circle: PropTypes.bool,
};

export default Image;
