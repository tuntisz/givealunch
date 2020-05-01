import * as React from 'react';

import { Container } from 'components/container/Container';

import s from './Disclaimer.scss';

export const Disclaimer = () => (
  <>
    <Container>
      <div className={s.disclaimerDiv}>
        <p className={s.disclaimer}>
          <strong>DISCLAIMER:</strong> We just source and share links to
          GoFundMe and social media pages from the public. We do not evaluate,
          manage, or endorse the links listed here. We are just trying to help
          hungry hungry hospital workers.
        </p>
      </div>
    </Container>
  </>
);

export default Disclaimer;
