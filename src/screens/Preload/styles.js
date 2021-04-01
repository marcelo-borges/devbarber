import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #63c2d1;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
`;
export const LoadingIcon = styled.ActivityIndicator`
  position: absolute;
  top: 50%;
  margin-top: 125px;
`;
