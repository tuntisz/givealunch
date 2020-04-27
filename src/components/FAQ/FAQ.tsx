import * as React from 'react';

import { Container } from 'components/container/Container';

import s from './FAQ.scss';

export const FAQ = () => (
  <>
    <Container>
      <div className={s.box}>
        <div className={s.qAndA}>
          <p className={s.question}>Can’t find something near you?</p>
          <p className={s.answer}>
            Search and add it to the list or donate to Frontline Foods.
          </p>
        </div>
        <div className={s.qAndA}>
          <p className={s.question}>No lunch money?</p>
          <p className={s.answer}>
             Help us scout local restaurants, caterers, and food service
            providers and <a href="/about">send us a restaurant</a>.
          </p>
        </div>
        <div className={s.qAndA}>
          <p className={s.question}>Want to feed more people?</p>
          <p className={s.answer}>Ask your company to give lunch money.</p>
        </div>
      </div>
    </Container>
  </>
);

export default FAQ;
