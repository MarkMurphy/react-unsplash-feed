import React from "react";
import styled, { keyframes } from "styled-components";

const loadingRotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const loadingDash = keyframes`
  0% {
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 150,200;
    stroke-dashoffset: -50;
  }

  100% {
    stroke-dasharray: 150,200;
    stroke-dashoffset: -185;
  }
`;

const Root = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;

  svg {
    width: ${props => props.size};
    height: ${props => props.size};
    margin: 16px;
    animation: ${loadingRotate} 2s linear infinite;
  }

  circle:last-child {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: ${loadingDash} 1.5s ease-in-out infinite;
    stroke-linecap: round;
  }
`;

const ActivityIndicator = ({ size, children, color, ...props }) => (
  <Root size={size} {...props}>
    <svg width={size} height={size} viewBox="0 0 64 64">
      <circle
        cx="32"
        cy="32"
        r="30"
        fill="none"
        strokeWidth="4"
        stroke={color}
        strokeOpacity="0.06"
      />
      <circle
        cx="32"
        cy="32"
        r="30"
        fill="none"
        strokeWidth="4"
        stroke={color}
        strokeOpacity="0.24"
      />
    </svg>
    {children}
  </Root>
);

ActivityIndicator.defaultProps = {
  color: "currentColor",
  size: 48
};

export default ActivityIndicator;
