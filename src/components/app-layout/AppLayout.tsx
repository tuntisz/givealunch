import * as React from 'react';
import Helmet from 'react-helmet';

import Logo from 'assets/svg/ueno-logo.svg';
import Dribbble from 'assets/svg/dribbble.svg';
import Twitter from 'assets/svg/twitter.svg';
import Github from 'assets/svg/github.svg';
import Instagram from 'assets/svg/instagram.svg';
import StarterLogo from 'assets/svg/starter-logo.svg';
import Facebook from 'assets/svg/facebook.svg';
import Linkedin from 'assets/svg/linkedin.svg';

import { helmet } from 'utils/helmet';
import { Header } from 'components/header/Header';
import { Link as HeaderLink } from 'components/header/Link';
import { Footer } from 'components/footer/Footer';
import { Devtools } from 'components/devtools/Devtools';

import s from './AppLayout.scss';

interface IAppLayoutProps {
  children: React.ReactNode;
}

const isDev = process.env.NODE_ENV === 'development';

export default ({ children }: IAppLayoutProps) => (
  <div className={s.layout}>
    <Helmet {...helmet} />

    <Header>
      <HeaderLink name="Why?" to="/why" />
      <HeaderLink name="Send us a restaurant" to="/about" />
    </Header>
    {children}
  </div>
);
