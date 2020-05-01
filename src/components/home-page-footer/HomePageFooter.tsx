import * as React from 'react';

import ShareYourLunch from '../share-your-lunch/ShareYourLunch';
import FAQ from '../faq/FAQ';
import Disclaimer from '../disclaimer/Disclaimer';

import s from './HomePageFooter.scss';

export const HomePageFooter = () => (
  <>
    <div className={s.taco}>
      <ShareYourLunch />
      <FAQ />
      <Disclaimer />
    </div>
  </>
);

export default HomePageFooter;
