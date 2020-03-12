import React from 'react';
import styled from 'styled-components';
import DefaultAvatar from '../../components/Avatar';

const Root = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 57px;
  padding: 16px 32px;
  border-bottom: 1px solid #ebebeb;
`;

const Info = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`;

const Avatar = styled(DefaultAvatar)`
  margin-right: 16px;
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Handle = styled.div`
  display: block;
  max-width: 100%;
  font-size: 12px;
  line-height: 16px;
  color: rgba(24, 25, 27, 0.4);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const User = () => (
  <Root>
    <Avatar src="https://secure.gravatar.com/avatar/92ce307e552b2c997a47a12f03180fbc?s=120" />
    <Info>
      <Name>John Appleseed</Name>
      <Handle>johnapple</Handle>
    </Info>
  </Root>
);

export default User;
