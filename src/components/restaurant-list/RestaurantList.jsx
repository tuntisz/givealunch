import * as React from 'react';

import s from './RestaurantList.scss';

export const RestaurantList = ({ restaurants, pageSize }) => {
  const [pageView, setPageView] = React.useState(1);
  const showButton = restaurants.length > (pageSize*pageView);
  const handleLoadMore = () => {
    setPageView(p => p + 1);
  }
  const renderRestaurants = () => {
    return restaurants.slice(0, pageView * pageSize).map((restaurant, index) => (
    <>
      <a key={`${restaurant.get('Restaurant Name')} ${restaurant.get('City')}`} href={restaurant.get('Link')} target="_blank" className={s.restaurant}>
        <strong>{restaurant.get('Restaurant Name')}</strong> is feeding <strong>{restaurant.get('Who are they helping')}</strong> in {restaurant.get('City')}.
      </a><br />
     </>
    ));
  };

  return (
    <>
      {renderRestaurants()}
      {showButton && (
        <button className={s.button} onClick={handleLoadMore}>Show more</button>
      )}
    </>
  );
};

export default RestaurantList;
