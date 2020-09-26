import React from 'react';

import instagramPhone from '../../assets/instagram-phone.png';
import instagramLogo from '../../assets/instagram-logo.png';
import instagramPerfil from '../../assets/perfil-instagram.jpg';

import {
  Container,
  InstagramPhone,
  InstagramContinue,
  InstagramContinueGroup,
  ProfilePhoto,
  NotAccount,
  GetTheApp,
  Download,
  AppDownload,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <InstagramPhone>
        <img src={instagramPhone} alt="Celular com perfil do Instagram" />
      </InstagramPhone>

      <InstagramContinue>
        <InstagramContinueGroup>
          <img src={instagramLogo} alt="Instagram Logo" />
          <ProfilePhoto>
            <img src={instagramPerfil} alt="Foto de perfil" />
          </ProfilePhoto>
          <a
            href="https://www.instagram.com/julio_cesar.an/"
            className="instagram-login"
          >
            Continue como julio_cesar.an
          </a>
          <a href="#home" className="instagram-logout">
            Remover conta
          </a>
        </InstagramContinueGroup>
        <InstagramContinueGroup>
          <p className="not-account">Não é julio_cesar.an?</p>
          <NotAccount>
            <span>Alternar contas</span>
            ou
            <span>Inscreva-se</span>
          </NotAccount>
        </InstagramContinueGroup>
        <GetTheApp>
          <strong>Baixe o aplicativo</strong>
          <Download>
            <AppDownload
              href="https://apps.apple.com/us/app/instagram/id389801252"
              target="_blank"
            />
            <AppDownload
              href="https://play.google.com/store/apps/details?id=com.instagram.android"
              target="_blank"
            />
          </Download>
        </GetTheApp>
      </InstagramContinue>
    </Container>
  );
};

export default Home;
