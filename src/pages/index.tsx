import * as React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import { FetchRestaurants } from 'services/Airtable';

import { Intro } from 'components/intro/Intro';
import RestaurantList from 'components/restaurant-list/RestaurantList';

import s from './index.scss';

const RestaurantSearch = () => {
  // tslint:disable-next-line:no-shadowed-variable
  const [query, setQuery]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = React.useState('');
  const [records, setRecords] = React.useState([]);
  const handleChange = (e: any) => {
    setQuery(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    FetchRestaurants(query).eachPage(
      function page(results: [any], fetchNextPage: () => any) {
        // This function (`page`) will get called for each page of records.

        setRecords(results);
        const element = document.getElementById('results');
        if (element) {
          element.scrollIntoView();
        }

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err: any) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
  };

  return (
    <>
      <form className={s.search} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          onChange={handleChange}
          value={query}
          placeholder="Find a city or hospital"
        />
        <button className={s.button} onClick={handleSubmit}>
          Find it
        </button>
      </form>
      {records.length > 0 && (
        <div id="results">
          <h2 className={s.cooking}>Who's cooking near you?</h2>
          <RestaurantList
            key={records.map((x) => x.get('Restaurant Name')).toString()}
            pageSize={5}
            restaurants={records}
          />
        </div>
      )}
    </>
  );
};

export default ({ data }: { data: any }) => (
  <>
    <Helmet title="Home" />
    <Intro>
      Working from home? Might as well
      <br />
      <h1 className={s.callout}>Give your lunch money</h1>
      <br />
      <p className={s.subtext}>
        Donate your lunch money to a local restaurant cooking meals for hospital
        workers.
      </p>
    </Intro>
    <div className={s.centered}>
      <RestaurantSearch />
    </div>
  </>
);
