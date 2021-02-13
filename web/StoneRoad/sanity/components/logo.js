import React from 'react';
import styled from 'styled-components'

const Logo = styled.img`
  height:60px;
`

const myLogo = () => (
  <Logo src="/static/images/logo-small.png" alt="logo" />
);

export default myLogo;