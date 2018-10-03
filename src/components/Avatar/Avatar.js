import React from "react";
import styled from "styled-components";

const sizes = {
  sm: 24
};

const Root = styled.div`
  display: inline-block;
  width: ${props => sizes[props.size]}px;
  height: ${props => sizes[props.size]}px;
  border-radius: 50%;
  overflow: hidden;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-position: center;
  object-fit: cover;
`;

const Avatar = ({ size, src, alt, imageProps, ...props }) => (
  <Root size={size} {...props}>
    <Image src={src} alt={alt} {...imageProps} />
  </Root>
);

Avatar.defaultProps = {
  size: "sm",
  alt: ""
};

export default Avatar;
