import styled from 'styled-components';

import appleButton from '../../assets/apple-button.png';
import googlePlayButton from '../../assets/googleplay-button.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 100vh;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const InstagramPhone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  img {
    height: 50rem;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

export const InstagramContinue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 50%;
  min-height: 34rem;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const InstagramContinueGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  width: 100%;
  padding: 1.3rem 0;
  border: 1px solid lightgray;
  color: rgb(160, 160, 160);

  &:nth-child(1) {
    min-height: 19rem;
  }

  > img {
    height: 3rem;
  }

  .instagram-login {
    background-color: #0095f6;
    color: #ffffff;
    padding: 8px;
    border-radius: 4px;
  }

  .instagram-logout {
    color: #0095f6;
    margin-top: 1rem;
  }
`;

export const ProfilePhoto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;

  > img {
    height: 6rem;
  }
`;

export const NotAccount = styled.p`
  margin-top: 4px;

  span {
    color: #0095f6;
    padding: 4px;
  }
`;

export const GetTheApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.3rem 0;
`;

export const Download = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
`;

export const AppDownload = styled.a`
  height: 3rem;
  width: 10.1rem;
  background-size: cover;

  &:nth-child(1) {
    background-image: url(${appleButton});
  }

  &:nth-child(2) {
    background-image: url(${googlePlayButton});
  }

  @media (max-width: 650px) {
    margin: 0px 8px;
  }
`;
