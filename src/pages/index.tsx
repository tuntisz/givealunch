import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import StarterLogo from 'assets/svg/starter-logo.svg';
import s from './index.scss';
import { graphql } from 'gatsby';
import { BlockText } from 'components/block-text/BlockText';
import RestaurantList from 'components/restaurant-list/RestaurantList';

export default ({ data }: { data: any }) => (
  <>
    <Helmet title="Home" />
    <Intro>
      Working from home? Might as well<br />
      <StarterLogo className={s.logoSvg} />
      <br />
      Donate your lunch money to a local<br />restaurant cooking meals for hospital workers.
    </Intro>
    <Intro>
      Who's cooking near you?
      <RestaurantList restaurants={data.allAirtable.edges.map(x => x.node.data)} />
    </Intro>
  </>
);

export const query = graphql`
query HomePage {
  allAirtable(filter: {table: {eq: "Restaurants"}}) {
    edges {
      node {
        data {
          Restaurant_Name,
          Who_are_they_helping,
          Link,
          Group_They_Are_Supporting,
          Added_By,
          City,
          State,
          Country
        }
      }
    }
  }
}
`;
