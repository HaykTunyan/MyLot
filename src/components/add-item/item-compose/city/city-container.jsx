import React, { useState, useEffect } from 'react';
import { getCity_req } from '../../../../api/product/product.api';
import City from './city';

const CityContainer = () => {
  const [upCity, setCity] = useState([]);

  useEffect(() => {
    const upCityProducts = async () => {
      try {
        const cityProductsList = await getCity_req();
        setCity(cityProductsList);
      } catch (e) {
        console.log(e.response);
      }
    };
    upCityProducts();
  }, []);

  return (
    <React.Fragment>
      <City data={upCity} />
    </React.Fragment>
  );
};

export default CityContainer;
