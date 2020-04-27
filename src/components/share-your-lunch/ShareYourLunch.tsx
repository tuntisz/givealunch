import * as React from 'react';

import { Container } from 'components/container/Container';

// import Facebook from '../../assets/svg/facebook.svg'; // wrong facebook icon

import s from './ShareYourLunch.scss';

export const ShareYourLunch = () => (
  <>
    <Container>
      <h2 className={s.callout}>Share your lunch</h2>
      {/*
      <ul className={s.socialMedias}>
        <li className={s.socialMediaIcon}><img src={Facebook} /></li>
        <li className={s.socialMediaIcon}><img src="twitter.svg" /></li>
        <li className={s.socialMediaIcon}><img src="instagram.svg" /></li>
      </ul>
      */}
      <h3 className={s.suggestion}>Give often</h3>
      <button className={s.giveEveryWeek}>Give every week</button>
    </Container>
  </>
);

export default ShareYourLunch;
