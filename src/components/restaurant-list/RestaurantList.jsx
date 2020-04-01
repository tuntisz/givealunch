import * as React from 'react';

import s from './RestaurantList.scss';

export const RestaurantList = ({ restaurants }) => {
  const renderRestaurants = () => {

    return restaurants.map((restaurant, index) => (
     <a href={restaurant.Link} target="_blank" className={s.restaurant}>
       <strong>{restaurant.Restaurant_Name}</strong> is feeding <strong>{restaurant.Who_are_they_helping}</strong> in {restaurant.City}.
     </a>
    ));
  };

  return (
    <>
      {renderRestaurants()}
    </>
  );
};

export default RestaurantList;
